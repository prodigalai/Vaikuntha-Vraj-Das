import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animationPresets, premiumEasing } from "@/lib/scrollAnimations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationType = "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "zoomIn";

interface UseScrollAnimationOptions {
  animationType?: AnimationType;
  delay?: number;
  duration?: number;
  start?: string;
  once?: boolean;
  stagger?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const {
    animationType = "fadeIn",
    delay = 0,
    duration = 1,
    start = "top 85%",
    once = true,
    stagger,
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const preset = animationPresets[animationType];
    const elements = stagger
      ? elementRef.current.querySelectorAll<HTMLElement>("[data-animate-item]")
      : [elementRef.current];

    if (stagger && elements.length > 0) {
      gsap.from(elements, {
        ...preset,
        duration,
        stagger,
        delay,
        ease: premiumEasing.soft,
        scrollTrigger: {
          trigger: elementRef.current,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
          once,
        },
      });
    } else {
      gsap.from(elementRef.current, {
        ...preset,
        duration,
        delay,
        ease: premiumEasing.soft,
        scrollTrigger: {
          trigger: elementRef.current,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
          once,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === elementRef.current) {
          trigger.kill();
        }
      });
    };
  }, [animationType, delay, duration, start, once, stagger]);

  return elementRef;
};
