// src/pages/Contact/Stepper.tsx
export default function Stepper({ step }: { step: 1 | 2 }) {
  return (
    <div className="mt-4 flex items-center gap-3 text-sm">
      <Badge active={step === 1} label="Your Info" />
      <span className="text-neutral-400">—</span>
      <Badge active={step === 2} label="Details" />
    </div>
  );
}

function Badge({ active, label }: { active: boolean; label: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs
        ${active
          ? "bg-orange-500 text-white dark:bg-orange-600"
          : "bg-black/5 text-neutral-700 dark:bg-white/5 dark:text-neutral-300"}`}
    >
      <span className="font-semibold">{active ? "●" : "○"}</span>
      <span>{label}</span>
    </div>
  );
}
