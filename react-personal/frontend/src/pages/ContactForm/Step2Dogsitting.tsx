
// src/pages/Contact/Step2Dogsitting.tsx
import Field from "./Field";
import type { Step2Dogsitting } from "./types";

const SIZES: Step2Dogsitting["dogSize"][] = ["Small", "Medium", "Large"];

export default function Step2DogsittingForm({
  value, setValue, errors,
}: {
  value: Step2Dogsitting; setValue: (v: Step2Dogsitting) => void;
  errors: Partial<Record<keyof Step2Dogsitting, string>>;
}) {
  return (
    <>
      <Field label="Dates" error={errors.dates}>
        <input
          value={value.dates || ""}
          onChange={(e) => setValue({ ...value, dates: e.target.value })}
          className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
          placeholder="e.g., Dec 18–23"
          required
        />
      </Field>

      <div className="grid gap-3 sm:grid-cols-3">
        {SIZES.map((size) => (
          <label
            key={size}
            className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2
              ${value.dogSize === size
                ? "border-orange-500 bg-orange-500/10 text-orange-700 dark:text-orange-300"
                : "border-black/10 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"}`}
          >
            <input
              type="radio"
              name="dogSize"
              value={size}
              checked={value.dogSize === size}
              onChange={() => setValue({ ...value, dogSize: size })}
              className="accent-orange-600"
            />
            <span>{size}</span>
          </label>
        ))}
      </div>

      <Field label="Notes (optional)">
        <textarea
          rows={3}
          value={value.notes || ""}
          onChange={(e) => setValue({ ...value, notes: e.target.value })}
          className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
          placeholder="Feeding schedule, meds, quirks…"
        />
      </Field>
    </>
  );
}
