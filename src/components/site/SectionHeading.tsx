import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 ${centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"}`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-xl"}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="mt-2 text-3xl leading-tight font-semibold sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-3 text-base text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
