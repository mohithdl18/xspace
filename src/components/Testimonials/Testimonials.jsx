
"use client";

import { useState } from "react";
import testimonialsData from "@/data/testimonials.json";

export default function Testimonials() {
    const testimonials = testimonialsData.testimonials;
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex(
            (current) => (current - 1 + testimonials.length) % testimonials.length
        );
    };

    const visibleTestimonials = Array.from(
        { length: Math.min(3, testimonials.length) },
        (_, index) => testimonials[(activeIndex + index) % testimonials.length]
    );

    return (
        <section
            id="testimonials"
            className="w-full overflow-hidden bg-primary-bg px-5 py-16 text-primary-text sm:px-8 md:py-20 lg:px-12"
        >
            <div className="mx-auto max-w-[1600px]">
                {/* Section heading */}
                <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
                    <div>
                        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.25em] text-button-bg">
                            Words That Matter
                        </p>

                        <h2 className="font-body text-4xl leading-tight md:text-5xl lg:text-6xl">
                            Trusted by those
                            <br />
                            <span className="text-button-bg">who build better.</span>
                        </h2>
                    </div>

                    <p className="max-w-md font-body text-sm leading-7 text-primary-text/70 md:text-base">
                        Discover what our customers and partners have to say about their
                        experience with XSpace Ply.
                    </p>
                </div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                    {visibleTestimonials.map((testimonial) => (
                        <article
                            key={testimonial.id}
                            className="flex min-h-[350px] flex-col overflow-hidden rounded-[24px] bg-white/65 transition-colors duration-300 hover:bg-white/90 md:min-h-[370px]"
                        >
                            {/* Quote and review */}
                            <div className="flex flex-1 flex-col px-6 pb-6 pt-5 sm:px-7 sm:pt-6">
                                <span
                                    aria-hidden="true"
                                    className="mb-3 h-10 font-serif text-6xl leading-none text-secondary-bg/10"
                                >
                                    “
                                </span>

                                <p className="font-body text-base leading-7 text-primary-text/80 sm:text-[17px] sm:leading-[1.65]">
                                    {testimonial.quote}
                                </p>
                            </div>

                            {/* Customer details */}

                            <div className="mt-auto flex w-fit max-w-full min-h-[82px] items-center gap-3 rounded-tr-[28px] bg-[#EEEEE5] px-5 py-4 sm:px-6">

                                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-secondary-bg/10">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                        onError={(event) => {
                                            event.currentTarget.style.display = "none";
                                        }}
                                    />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="truncate font-body text-sm font-semibold text-primary-text sm:text-base">
                                        {testimonial.name}
                                    </h3>

                                    <p className="mt-1 font-body text-xs text-primary-text/60">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between">
                    {/* Previous / Next buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={prevSlide}
                            aria-label="Previous testimonials"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary-bg/20 text-secondary-bg transition-colors duration-300 hover:bg-secondary-bg hover:text-secondary-text"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path
                                    d="M15 18L9 12L15 6"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Next testimonials"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-button-bg text-secondary-text transition-colors duration-300 hover:bg-hover-bg hover:text-primary-text"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path
                                    d="M9 18L15 12L9 6"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Pagination dots */}
                    <div className="flex items-center gap-2">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={testimonial.id}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                                aria-current={activeIndex === index ? "true" : undefined}
                                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                                        ? "w-6 bg-button-bg"
                                        : "w-2.5 bg-secondary-bg/20 hover:bg-secondary-bg/50"
                                    }`}
                            />
                        ))}
                    </div>

                    <span className="font-body text-xs text-primary-text/50">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(testimonials.length).padStart(2, "0")}
                    </span>
                </div>
            </div>
        </section>
    );
}
