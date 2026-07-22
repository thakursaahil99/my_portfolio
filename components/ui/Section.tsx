import FadeUp from "../animations/FadeUp";

export default function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full py-24 px-6 md:px-20 ${className}`}
    >
      <FadeUp>
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </FadeUp>
    </section>
  );
}