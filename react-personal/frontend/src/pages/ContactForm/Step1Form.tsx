// src/pages/Contact/Step1Form.tsx
import Field from "./Field";
import type { Step1, Purpose } from "./types";

const PURPOSES: Purpose[] = ["Software Dev", "Engineering", "Dogsitting"];

export default function Step1Form({
  s1,
  setS1,
  errors,
  onNext,
}: {
  s1: Step1;
  setS1: (s: Step1) => void;
  errors: Partial<Record<keyof Step1, string>>;
  onNext: () => void;
}) {
  const canNext = Object.keys(errors).length === 0;

  return (
    <div className="grid gap-4">
      <Field label="Name" error={errors.name}>
        <input
          value={s1.name}
          onChange={(e) => setS1({ ...s1, name: e.target.value })}
          className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
          placeholder="Jane Doe"
          required
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={s1.email}
          onChange={(e) => setS1({ ...s1, email: e.target.value })}
          className="w-full rounded-md border px-3 py-2 bg-white/80 dark:bg-white/5"
          placeholder="jane@example.com"
          required
        />
      </Field>

      <div>
        <div className="mb-2 font-medium">What are you contacting me for?</div>
        <div className="grid gap-2 sm:grid-cols-3">
          {PURPOSES.map((p) => (
            <label
              key={p}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2
                ${s1.purpose === p
                  ? "border-orange-500 bg-orange-500/10 text-orange-700 dark:text-orange-300"
                  : "border-black/10 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"}`}
            >
              <input
                type="radio"
                name="purpose"
                value={p}
                checked={s1.purpose === p}
                onChange={() => setS1({ ...s1, purpose: p })}
                className="accent-orange-600"
              />
              <span>{p}</span>
            </label>
          ))}
        </div>
        {errors.purpose && <p className="mt-1 text-sm text-red-600">{errors.purpose}</p>}
      </div>

      <div className="mt-2 flex gap-3">
        <button
          onClick={(e) => { e.preventDefault(); if (canNext) onNext(); }}
          className={`rounded-xl px-5 py-2.5 font-medium transition
            ${canNext
              ? "bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
              : "bg-neutral-200 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 cursor-not-allowed"}`}
        >
          Next
        </button>
        <a href="/" className="rounded-xl border px-5 py-2.5 hover:bg-black/5 dark:hover:bg-white/5">
          Cancel
        </a>
      </div>
    </div>
  );
}
