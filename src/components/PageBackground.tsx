import React from "react";

interface PageBackgroundProps {
    image?: string;
    opacity?: number;
    blur?: string;
}

const PageBackground: React.FC<PageBackgroundProps> = ({
    image,
    opacity = 0.65,
    blur = "0px"
}) => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[hsl(var(--background))]">
            {/* Base Gradient for warmth (very minimal) */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream/5 via-white/5 to-cream/5" />

            {/* Primary Image */}
            {image && (
                <div
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{ opacity: opacity }}
                >
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ filter: `blur(${blur})` }}
                    />

                    {/* Fades to blend edges without hiding central image content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/40 via-transparent to-[hsl(var(--background))]/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))]/20 via-transparent to-[hsl(var(--background))]/20" />
                </div>
            )}

            {/* Spiritual Color Blobs for that premium aura */}
            <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] animate-pulse opacity-30" />
            <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-saffron-light/5 rounded-full blur-[100px] opacity-20" />

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>
    );
};

export default PageBackground;
