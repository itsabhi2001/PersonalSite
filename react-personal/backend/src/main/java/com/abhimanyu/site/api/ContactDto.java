package com.abhimanyu.site.api;

public record ContactDto(
  String name,
  String email,
  String topic,
  String message
) {}
