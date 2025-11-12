// src/pages/Contact/Field.tsx
import React from "react";

export default function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-sm font-medium">{label}</div>
      {children}
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </label>
  );
}
