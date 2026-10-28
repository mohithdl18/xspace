
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import productsData from "@/data/products.json";

const categories = [
    { name: "Plywood", count: 4 },
    { name: "Blockboard", count: 2 },
    { name: "Doors", count: 2 },
    { name: "MDF", count: 2 },
    { name: "Laminates", count: 2 },
    { name: "PVC Foam Boards", count: 1 },
    { name: "Particle Boards", count: 1 },
    { name: "Timber", count: 1 },
];

const allProducts = Array.isArray(productsData)
    ? productsData
    : productsData.products ?? [];

function getProductCategory(product) {
    return product.category ?? product.type ?? "";
}

function getThickness(product) {
    const value =
        product.availableThickness ??
        product.thickness ??
        product.thicknesses ??
        [];

    return Array.isArray(value)
        ? value.map((item) =>
            typeof item === "object"
                ? item.label ?? item.value ?? item.name
                : item
        )
        : String(value).split(",").map((item) => item.trim()).filter(Boolean);
}

function getBestFit(product) {
    const value =
        product.bestFit ??
        product.bestFor ??
        product.applications ??
        product.features ??
        [];

    return Array.isArray(value)
        ? value.map((item) =>
            typeof item === "object"
                ? item.label ?? item.name ?? item.value
                : item
        )
        : [value].filter(Boolean);
}

function ProductCard({ product }) {
    const title =
        product.name ??
        product.title ??
        product.productName ??
        "Product";

    const subtitle =
        product.subtitle ??
        product.description ??
        product.shortDescription ??
        "";

    const image =
        product.image ??
        product.imageUrl ??
        product.image_url ??
        product.images?.[0] ??
        "/images/product-placeholder.jpg";

    const thickness = getThickness(product);
    const bestFit = getBestFit(product);

    const productId = product.slug ?? product.id ?? title;

    return (
        <article
            className="flex h-[540px] min-w-0 flex-col  p-4 transition-transform duration-300 hover:-translate-y-1 md:h-[570px] md:p-5"
        >
            {/* Product Heading */}
            <div className="h-[76px] shrink-0 overflow-hidden">
                <h3 className="line-clamp-1 font-body text-2xl leading-tight text-primary-text md:text-xl">
                    {title}
                </h3>

                <p className="mt-2 line-clamp-2 font-body text-[10px] leading-4 text-primary-text/50 md:text-xs">
                    {subtitle}
                </p>
            </div>

            {/* Product Image */}

            {/* Product Image */}
            <div className="h-[180px] w-full shrink-0 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>


            {/* Available Thickness */}
            <div className="mt-4 h-[92px] shrink-0 overflow-hidden">
                <p className="mb-3 font-body text-[10px] font-medium uppercase tracking-[0.12em] text-primary-text/60">
                    Available Thickness
                </p>

                <div className="flex flex-wrap content-start gap-2">
                    {thickness.map((item, index) => (
                        <span
                            key={`${item}-${index}`}
                            className="border border-primary-text/15 px-2 py-1 font-body text-xs text-primary-text"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Best Fit For */}
            <div className="h-[96px] shrink-0 overflow-hidden">
                <p className="mb-3 font-body text-[10px] font-medium uppercase tracking-[0.12em] text-primary-text/60">
                    Best Fit For
                </p>

                <ul className="space-y-1">
                    {bestFit.slice(0, 4).map((point, index) => (
                        <li
                            key={`${point}-${index}`}
                            className="truncate font-body text-xs leading-5 text-primary-text/75"
                        >
                            <span className="mr-2 text-button-bg">—</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Quote Button */}
            <div className="mt-auto flex h-[48px] shrink-0 items-end">
                <Link
                    href={`/contact?product=${encodeURIComponent(productId)}`}
                    className="flex h-11 w-full items-center justify-between bg-button-bg px-4 font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary-text transition-colors duration-300 hover:bg-hover-bg hover:text-primary-text"
                >
                    Request Quote
                    <span aria-hidden="true" className="text-lg">
                        →
                    </span>
                </Link>
            </div>
        </article>
    );
}

export default function ProductMainDisplay() {
    const [activeCategory, setActiveCategory] = useState("Plywood");

    const visibleProducts = useMemo(() => {
        return allProducts.filter((product) => {
            if (activeCategory === "All") return true;

            return (
                getProductCategory(product).toLowerCase() ===
                activeCategory.toLowerCase()
            );
        });
    }, [activeCategory]);

    return (
        <section
            id="products"
            className="min-h-screen w-full bg-primary-bg px-5 py-12 text-primary-text md:px-10 md:py-16 lg:px-16 lg:py-20"
        >
            <div className="mx-auto max-w-[1800px]">
                {/* Section Heading */}
                <div className="mb-8 md:mb-10">
                    <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.25em] text-button-bg">
                        Explore Our Range
                    </p>

                    <h2 className="font-body text-4xl leading-tight md:text-5xl lg:text-6xl">
                        Products<span className="text-button-bg">.</span>
                    </h2>
                </div>

                {/* Category Toggle Bar */}
                <div
                    className="mb-8 flex w-full gap-2 overflow-x-auto border-b border-primary-text/15 pb-4 md:mb-10 md:gap-3"
                    role="tablist"
                    aria-label="Product categories"
                >
                    {categories.map((category) => {
                        const isActive = activeCategory === category.name;

                        return (
                            <button
                                key={category.name}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveCategory(category.name)}
                                className={`flex shrink-0 items-center gap-2 px-3 py-3 font-body text-xs transition-colors duration-300 md:px-4 md:text-sm ${isActive
                                        ? "bg-secondary-bg text-secondary-text"
                                        : "text-primary-text/65 hover:bg-hover-bg hover:text-primary-text"
                                    }`}
                            >
                                <span>{category.name}</span>

                                <span
                                    className={`text-[10px] ${isActive ? "text-secondary-text/70" : "text-button-bg"
                                        }`}
                                >
                                    {category.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Product Grid */}
                {visibleProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {visibleProducts.map((product, index) => (
                            <ProductCard
                                key={product.id ?? product.slug ?? `${product.name ?? product.title}-${index}`}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[300px] items-center justify-center">
                        <p className="font-body text-sm text-primary-text/60">
                            No products found in {activeCategory}.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
