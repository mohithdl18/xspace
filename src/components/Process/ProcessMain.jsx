
const processes = [
  {
    title: "Step 1 of 5",
    description:
      "Carefully selected timber and raw materials form the foundation of reliable, high-quality plywood.",
    image: "/images/process.png",
    alt: "Timber selected for plywood manufacturing",
  },
  {
    title: "Step 2 of 5",
    description:
      "Timber is processed into uniform veneers, prepared for precision layering and consistent performance.",
    image: "/images/process.png",
    alt: "Wood veneer preparation",
  },
  {
    title: "Step 3 of 5",
    description:
      "Individual veneer layers are arranged with precision to create a strong and stable plywood structure.",
    image: "/images/process.png",
    alt: "Layering veneers during plywood production",
  },
  {
    title: "Step 4 of 5",
    description:
      "The layers are bonded and pressed under controlled conditions to achieve strength and durability.",
    image: "/images/process.png",
    alt: "Plywood bonding and pressing",
  },
  {
    title: "Step 5 of 5",
    description:
      "Each panel is trimmed, finished and inspected before it is ready for delivery and use.",
    image: "/images/process.png",
    alt: "Finished plywood panels undergoing quality inspection",
  },
];

export default function ProcessMain() {
  return (
    <section
      id="process"
      className="flex h-screen w-full flex-col overflow-hidden bg-primary-bg px-6 py-8 text-primary-text md:px-10 md:py-10 lg:px-14 lg:py-12 xl:px-20"
    >
      {/* Heading */}
      <div className="mb-8 shrink-0 md:mb-10 lg:mb-12">
        <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.25em] text-button-bg md:text-sm">
          XSpace Ply · Our Process
        </p>

        <h2 className="font-body text-4xl leading-tight md:text-5xl lg:text-6xl">
          How we manufacture
          <span className="text-button-bg">.</span>
        </h2>
      </div>

      {/* Five Cards */}
      <div className="grid min-h-0 flex-1 grid-cols-5">
        {processes.map((process, index) => (
          <article
            key={process.title}
            className={`flex min-h-0 min-w-0 flex-col ${
              index !== 0
                ? "border-l border-primary-text/25 pl-3 md:pl-5 lg:pl-7"
                : ""
            } ${
              index !== processes.length - 1
                ? "pr-3 md:pr-5 lg:pr-7"
                : ""
            }`}
          >
            {/* Step Title */}
            <h3 className="mb-4 font-body text-sm font-medium md:mb-5 md:text-base lg:text-lg">
              {process.title}
            </h3>

            {/* Description */}
            
{/* Description */}
<p className="mb-5 font-body text-[11px] leading-relaxed text-primary-text/75 md:text-xs lg:text-sm">
  {process.description}
</p>

{/* Image pinned to the bottom with fixed height */}

<div className="mt-auto flex w-full shrink-0 justify-center">
  <div className="aspect-[3/4] h-[40vh] max-h-[360px]">
    <img
      src={process.image}
      alt={process.alt}
      loading="lazy"
      className="h-full w-full object-cover"
    />
  </div>
</div>


          </article>
        ))}
      </div>
    </section>
  );
}
