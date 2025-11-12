
// src/pages/Contact/Step2Engineering.tsx
import Field from "./Field";
import type { Step2Engineering } from "./types";

export default function Step2EngineeringForm({
  value, setValue, errors,
}: {
  value: Step2Engineering; setValue: (v: Step2Engineering) => void;
  errors: Partial<Record<keyof Step2Engineering, string>>;
}) {
  return (
    <>
      <Field label="Engineering topic" error={errors.topic}>
        <input
          value={value.topic || ""}
          onChange={(e) => setValue({ ...value, topic: e.target.value })}
          className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
          placeholder="3D printing, automotive, PC build…"
          required
        />
      </Field>

      <Field label="Details" error={errors.details}>
        <textarea
          rows={4}
          value={value.details || ""}
          onChange={(e) => setValue({ ...value, details: e.target.value })}
          className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
          placeholder="What do you need help with?"
          required
        />
      </Field>
    </>
  );
}
