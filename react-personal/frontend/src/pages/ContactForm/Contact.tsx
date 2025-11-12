import { useState } from "react";

type Purpose = "Software Dev" | "Engineering" | "Dogsitting";

export default function ContactPage() {
  // step control
  const [step, setStep] = useState<1 | 2>(1);

  // step 1
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState<Purpose | "">("");

  // step 2 (branch data)
  const [summary, setSummary] = useState("");          // software
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const [engTopic, setEngTopic] = useState("");        // engineering
  const [engDetails, setEngDetails] = useState("");

  const [dates, setDates] = useState("");              // dogsitting
  const [dogSize, setDogSize] = useState<"Small" | "Medium" | "Large" | "">("");
  const [notes, setNotes] = useState("");

  const isSoftware = purpose === "Software Dev";
  const isEngineering = purpose === "Engineering";
  const isDogsitting = purpose === "Dogsitting";

  const next = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };
  const back = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(1);
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    // Build a simple message string from the branch
    let message = "General inquiry.";
    if (isSoftware) {
      message = [
        "Purpose: Software Development",
        `Summary: ${summary}`,
        budget ? `Budget: ${budget}` : "",
        timeline ? `Timeline: ${timeline}` : "",
      ].filter(Boolean).join("\n");
    } else if (isEngineering) {
      message = [
        "Purpose: Engineering",
        `Topic: ${engTopic}`,
        `Details: ${engDetails}`,
      ].join("\n");
    } else if (isDogsitting) {
      message = [
        "Purpose: Dogsitting",
        `Dates: ${dates}`,
        `Dog size: ${dogSize || "N/A"}`,
        notes ? `Notes: ${notes}` : "",
      ].filter(Boolean).join("\n");
    }

    // POST to your Spring endpoint
    await fetch(import.meta.env.VITE_API_BASE + "/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        topic: purpose || "General",
        message,
      }),
    });

    // simple reset
    setStep(1);
    setName(""); setEmail(""); setPurpose("");
    setSummary(""); setBudget(""); setTimeline("");
    setEngTopic(""); setEngDetails("");
    setDates(""); setDogSize(""); setNotes("");
    alert("Thanks! Your message was sent.");
  }

  return (
    <div className="flex min-h-screen flex-col">
    <section className="container py-16 flex-1">
      <h2 className="text-3xl font-semibold">Contact Me</h2>

      <form className="mt-6 grid gap-4 max-w-2xl">
        {step === 1 && (
          <>
            <label className="block">
              <div className="mb-1 text-sm font-medium">Name</div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
                placeholder="Jane Doe"
              />
            </label>

            <label className="block">
              <div className="mb-1 text-sm font-medium">Email</div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
                placeholder="jane@example.com"
              />
            </label>

            <div>
              <div className="mb-2 font-medium">What are you contacting me for?</div>
              <div className="grid gap-2 sm:grid-cols-3">
                {(["Software Dev", "Engineering", "Dogsitting"] as Purpose[]).map((p) => (
                  <label
                    key={p}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2
                      ${purpose === p
                        ? "border-orange-500 bg-orange-500/10 text-orange-700 dark:text-orange-300"
                        : "border-black/10 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"}`}
                  >
                    <input
                      type="radio"
                      name="purpose"
                      value={p}
                      checked={purpose === p}
                      onChange={() => setPurpose(p)}
                      className="accent-orange-600"
                    />
                    <span>{p}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-2 flex gap-3">
              <button
                onClick={next}
                className="rounded-xl px-5 py-2.5 font-medium bg-orange-500 text-white hover:bg-orange-600
                           dark:bg-orange-600 dark:hover:bg-orange-700 transition"
              >
                Next
              </button>
              <a href="/" className="rounded-xl border px-5 py-2.5 hover:bg-black/5 dark:hover:bg-white/5">
                Cancel
              </a>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {isSoftware && (
              <>
                <label className="block">
                  <div className="mb-1 text-sm font-medium">Project summary</div>
                  <textarea
                    rows={4}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
                    placeholder="Briefly describe what you want to build…"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <div className="mb-1 text-sm font-medium">Budget (optional)</div>
                    <input
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
                      placeholder="$2,000–$5,000"
                    />
                  </label>
                  <label className="block">
                    <div className="mb-1 text-sm font-medium">Timeline (optional)</div>
                    <input
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
                      placeholder="e.g., 4–6 weeks"
                    />
                  </label>
                </div>
              </>
            )}

            {isEngineering && (
              <>
                <label className="block">
                  <div className="mb-1 text-sm font-medium">Engineering topic</div>
                  <input
                    value={engTopic}
                    onChange={(e) => setEngTopic(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
                    placeholder="3D printing, automotive, PC build…"
                  />
                </label>
                <label className="block">
                  <div className="mb-1 text-sm font-medium">Details</div>
                  <textarea
                    rows={4}
                    value={engDetails}
                    onChange={(e) => setEngDetails(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
                    placeholder="What do you need help with?"
                  />
                </label>
              </>
            )}

            {isDogsitting && (
              <>
                <label className="block">
                  <div className="mb-1 text-sm font-medium">Dates</div>
                  <input
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
                    placeholder="e.g., Dec 18–23"
                  />
                </label>

                <div className="grid gap-3 sm:grid-cols-3">
                  {(["Small", "Medium", "Large"] as const).map((size) => (
                    <label
                      key={size}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2
                        ${dogSize === size
                          ? "border-orange-500 bg-orange-500/10 text-orange-700 dark:text-orange-300"
                          : "border-black/10 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"}`}
                    >
                      <input
                        type="radio"
                        name="dogSize"
                        value={size}
                        checked={dogSize === size}
                        onChange={() => setDogSize(size)}
                        className="accent-orange-600"
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>

                <label className="block">
                  <div className="mb-1 text-sm font-medium">Notes (optional)</div>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
                    placeholder="Feeding schedule, meds, quirks…"
                  />
                </label>
              </>
            )}

            <div className="mt-2 flex gap-3">
              <button
                onClick={back}
                className="rounded-xl border px-5 py-2.5 hover:bg-black/5 dark:hover:bg-white/5"
              >
                Back
              </button>
              <button
                onClick={submit}
                className="rounded-xl px-5 py-2.5 font-medium bg-orange-500 text-white hover:bg-orange-600
                           dark:bg-orange-600 dark:hover:bg-orange-700 transition"
              >
                Send
              </button>
            </div>
          </>
        )}
      </form>
    </section>
    </div>
  );
}
