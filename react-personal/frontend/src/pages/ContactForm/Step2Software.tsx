// src/pages/Contact/Step2Software.tsx
import Field from "./Field";
import type { Step2Software } from "./types";

export default function Step2SoftwareForm({
  value, setValue, errors,
}: {
  value: Step2Software; setValue: (v: Step2Software) => void;
  errors: Partial<Record<keyof Step2Software, string>>;
}) {
  return (
    <>
      <Field label="Project summary" error={errors.summary}>
        <textarea
          rows={4}
          value={value.summary || ""}
          onChange={(e) => setValue({ ...value, summary: e.target.value })}
          className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
          placeholder="Briefly describe what you want to build…"
          required
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Budget (optional)">
          <input
            value={value.budget || ""}
            onChange={(e) => setValue({ ...value, budget: e.target.value })}
            className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
            placeholder="$2,000–$5,000"
          />
        </Field>
        <Field label="Timeline (optional)">
          <input
            value={value.timeline || ""}
            onChange={(e) => setValue({ ...value, timeline: e.target.value })}
            className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
            placeholder="e.g., 4–6 weeks"
          />
        </Field>
      </div>
    </>
  );
}
