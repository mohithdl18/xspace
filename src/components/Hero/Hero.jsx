
export default function Hero() {
    return (
        <section className="relative h-[110vh] w-full overflow-hidden bg-primary-bg">

            {/* Hero Image */}
            <div className="absolute inset-0 h-full w-full">
                <img
                    src="/images/Hero.jpg"
                    alt="XSpace Ply plywood and wood interiors"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Dark overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-black/50" />

            {/* Bottom Left Content */}
            <div className="absolute inset-0 flex items-end justify-start">
                <div className="mb-16 ml-8 text-left text-secondary-text md:mb-20 md:ml-16 lg:mb-50 lg:ml-20">

                    <h1 className="font-body  text-5xl text-secondary-text md:text-7xl lg:text-9xl">
                        XSpace<span className="text-button-bg">Ply</span>
                    </h1>

                    <p className="mt-5 font-body text-3xl uppercase text-hover-bg md:text-4xl lg:text-5xl">
                        Premium Quality. Built to last.
                    </p>

                    <p className="mt-6 max-w-md font-body text-sm uppercase tracking-[0.25em] text-secondary-text md:text-base">
                        Powered by C Nanjappa Timbers
                    </p>

                </div>
            </div>

        </section>
    );
}
