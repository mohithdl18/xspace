
const features = [
  {
    icon: "trees",
    title: "SUSTAINABLE FORESTRY",
    description:
      "Responsibly sourced timber for a sustainable future and healthier forests",
  },
  {
    icon: "logs",
    title: "QUALITY CONTROL",
    description:
      "Strict quality checks to ensure strength, durability and consistent quality",
  },
  {
    icon: "team",
    title: "EXPERT TEAM",
    description:
      "Skilled professionals dedicated to precision, craftsmanship and reliability",
  },
  {
    icon: "processing",
    title: "CUSTOM PROCESSING",
    description:
      "Tailored plywood solutions designed to meet your specific requirements",
  },
];

function FeatureIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-24 w-24"
      {...common}
      aria-hidden="true"
    >
      {type === "trees" && (
        <>
          <path d="M25 47 C10 43 12 27 24 23 C20 10 34 4 43 13 C53 3 68 12 65 24 C79 28 79 43 67 48 L62 40 C54 47 44 47 37 40 Z" />
          <path d="M37 40 L32 88 H48 L47 48 M47 48 L51 88 H66 L61 42" />
          <path d="M40 65 V88 M58 65 V88" />
          <path d="M61 44 C76 46 84 34 76 24 C79 13 67 7 59 13" />
        </>
      )}

      {type === "logs" && (
        <>
          <circle cx="37" cy="27" r="16" />
          <circle cx="37" cy="27" r="6" />
          <circle cx="23" cy="62" r="16" />
          <circle cx="23" cy="62" r="6" />
          <circle cx="57" cy="62" r="16" />
          <circle cx="57" cy="62" r="6" />
          <path d="M53 11 H91 M69 27 H91 M75 43 H91 M73 62 H91 M75 78 H91" />
          <path d="M55 11 L49 3 M49 3 L58 5 L64 13" />
        </>
      )}

      {type === "team" && (
        <>
          <circle cx="44" cy="28" r="17" />
          <path d="M27 25 H61 M29 18 H59 M28 33 Q44 40 60 33" />
          <path d="M34 43 L34 50 Q44 58 54 50 L54 43" />
          <path d="M20 88 V69 Q20 54 35 53 L44 60 L53 53 Q68 54 68 69 V88 Z" />
          <path d="M34 72 H54 M34 80 H54 M10 88 V72 Q10 60 20 58 M68 65 H77 V88 H68" />
          <path d="M78 42 L90 36 V64 L78 58 Z M90 40 Q98 50 90 60" />
          <path d="M75 43 H78 V57 H75 Z" />
        </>
      )}

      {type === "processing" && (
        <>
          <path d="M12 47 L18 39 L14 31 L23 25 L22 16 L32 15 L37 6 L46 12 L54 5 L62 13 L72 10 L76 20 L86 24 L83 34 L91 42 L85 49" />
          <circle cx="52" cy="34" r="15" />
          <circle cx="52" cy="34" r="7" />
          <path d="M10 47 H92 V88 H10 Z" />
          <path d="M10 57 H92 M10 74 Q32 84 53 72 T92 74" />
          <path d="M10 88 Q30 63 50 76 T92 88" />
        </>
      )}
    </svg>
  );
}

export default function AboutMain() {
  return (
    <section className="w-full bg-primary-bg">

      {/* TOP SECTION - 75% */}
      {/* TOP SECTION - Equal margins, 50% image + 50% text */}
<div className="px-6 py-6 md:px-10 lg:px-16">
  <div className="grid min-h-[75vh] grid-cols-1 overflow-hidden md:grid-cols-2">

    {/* Left Image - 50% */}
    {/* Left Image - Centered */}
<div className="flex items-center justify-center p-4 md:p-6">
  <div className="relative h-[460px] w-[90%] overflow-hidden">
    <img
      src="/images/about-main.png"
      alt="XSpace Ply plywood craftsmanship"
      className="h-full w-full object-cover"
    />
  </div>
</div>

    {/* Right Content - 50% */}
    <div className="flex flex-col justify-center px-6 py-12 md:px-8 lg:px-12 xl:px-16">
      <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.25em] text-button-bg">
        About XSpace Ply
      </p>

      <h2 className="mb-6 font-body text-4xl font-normal leading-tight text-primary-text md:text-5xl lg:text-6xl">
        Built on Quality.
        <br />
        Made to Last.
      </h2>

      <p className="max-w-2xl font-body text-base leading-8 text-primary-text/75 md:text-lg">
        At XSpace Ply, we believe every great space begins with
        dependable materials. We are committed to delivering quality
        plywood solutions that combine strength, durability and
        precision for homes, workplaces and commercial interiors.
      </p>

      <p className="mt-5 max-w-2xl font-body text-base leading-8 text-primary-text/75 md:text-lg">
        From carefully selected materials to meticulous processing,
        our focus is on consistent quality and reliable products
        that bring your ideas to life.
      </p>

      <a
        href="#products"
        className="mt-8 inline-flex w-fit items-center gap-3 border-b border-button-bg pb-2 font-body text-sm font-semibold uppercase tracking-wider text-primary-text transition-colors hover:text-button-bg"
      >
        Know Our Story
        <span aria-hidden="true">↗</span>
      </a>
    </div>

  </div>
</div>

      {/* BOTTOM SECTION - 25% */}
      <div className="grid grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-8 lg:py-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-7 text-button-bg">
              <FeatureIcon type={feature.icon} />
            </div>

            <h3 className="mb-4 font-body text-lg font-medium text-primary-text md:text-xl">
              {feature.title}
            </h3>

            <p className="max-w-sm font-body text-base leading-7 text-primary-text/65">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
