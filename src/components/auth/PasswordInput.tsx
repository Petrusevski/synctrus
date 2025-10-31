import { useState } from "react";

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Password",
  name = "password",
  required = true,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        name={name}
        type={show ? "text" : "password"}
        className="w-full rounded-xl border px-4 py-3 pr-12"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete="current-password"
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-sm text-neutral-600 hover:bg-neutral-100"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
