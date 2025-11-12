package com.abhimanyu.site.api;

import java.time.Instant;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ContactController {

  // Mail is optional; if MailSender bean not present, we’ll just log.
  private final JavaMailSender mailSender; // may be null if mail not on classpath
  private final String notifyTo;

  public ContactController(
      @Value("${contact.notify.to:}") String notifyTo,
      @org.springframework.beans.factory.ObjectProvider<JavaMailSender> mailSenderProvider
  ) {
    this.notifyTo = notifyTo;
    this.mailSender = mailSenderProvider.getIfAvailable();
  }

  @PostMapping("/contact")
  public ResponseEntity<?> contact(@RequestBody ContactDto dto) {
    // 1) Log to console (always)
    System.out.println("=== Contact ===");
    System.out.println("From: " + dto.name() + " <" + dto.email() + ">");
    System.out.println("Topic: " + dto.topic());
    System.out.println(dto.message());
    System.out.println("Received: " + Instant.now());
    System.out.println("================");

    // 2) If mail configured, send an email
    if (this.mailSender != null && StringUtils.hasText(notifyTo)) {
      var msg = new SimpleMailMessage();
      msg.setTo(notifyTo);
      msg.setSubject("[Portfolio] " + (dto.topic() == null ? "Message" : dto.topic()));
      msg.setText("""
          From: %s <%s>

          %s
          """.formatted(dto.name(), dto.email(), dto.message()));
      mailSender.send(msg);
    }

    return ResponseEntity.status(201).body(Map.of(
      "ok", true,
      "receivedAt", Instant.now().toString()
    ));
  }
}
