type Props = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon?: string; // emoji or 1–2 chars
};

export default function ServiceCard({ title, description, tags, link, icon = "★" }: Props) {
  return (
    <div className="group h-full">
      {/* Gradient border frame */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
        {/* Card */}
        <div className="h-full rounded-[14px] bg-white/80 backdrop-blur-sm shadow-sm border border-neutral-100
                        transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          <div className="p-6 flex flex-col h-full">
            {/* Icon chip */}
            <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-xl
                            bg-amber-50 text-amber-700 border border-amber-100 text-lg">
              {icon}
            </div>

            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-neutral-600">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t}
                  className="px-3 py-1 text-xs rounded-full bg-neutral-50 text-neutral-700 border border-neutral-200">
                  {t}
                </span>
              ))}
            </div>

            {/* Footer CTA pinned to bottom */}
            <div className="mt-auto pt-5">
              <a
                href={link}
                className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-600"
              >
                Learn more <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
