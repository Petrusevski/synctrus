import { ReactNode } from "react";

export default function ServiceLayout({
  title, subtitle, graphic, children
}: { title: string; subtitle: string; graphic?: ReactNode; children: ReactNode }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">{title}</h1>
            <p className="text-gray-700">{subtitle}</p>
            <div className="mt-8 space-y-10">{children}</div>
          </div>
          <div className="hidden md:block p-6 card">{graphic}</div>
        </div>
      </div>
    </section>
  );
}
