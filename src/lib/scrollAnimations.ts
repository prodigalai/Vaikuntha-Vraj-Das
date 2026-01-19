import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Track if ScrollTrigger has been registered
let scrollTriggerRegistered = false;

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  if (!scrollTriggerRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerRegistered = true;
  }
}

// Soft easing functions for premium feel
export const premiumEasing = {
  soft: "power2.out",
  softer: "power1.out",
  smooth: "sine.out",
  gentle: "power3.out",
};

// Animation presets
export const animationPresets = {
  fadeIn: {
    opacity: 0,
    y: 30,
  },
  fadeInUp: {
    opacity: 0,
    y: 50,
  },
  fadeInDown: {
    opacity: 0,
    y: -50,
  },
  fadeInLeft: {
    opacity: 0,
    x: -50,
  },
  fadeInRight: {
    opacity: 0,
    x: 50,
  },
  scaleIn: {
    opacity: 0,
    scale: 0.9,
  },
  zoomIn: {
    opacity: 0,
    scale: 0.8,
  },
};

// Helper function to check if element is in viewport
const isInViewport = (element: HTMLElement, offset: number = 0) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Initialize scroll animations
export const initScrollAnimations = () => {
  if (typeof window === "undefined") return;

  // Register ScrollTrigger if not already registered
  if (!scrollTriggerRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerRegistered = true;
  }

  // Refresh ScrollTrigger to recalculate positions
  ScrollTrigger.refresh();

  // Default animation for elements with data-animate attribute
  gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((element) => {
    // Skip if already animated
    if (element.dataset.animated === "true") return;
    
    const animationType = element.dataset.animate || "fadeIn";
    const delay = parseFloat(element.dataset.delay || "0");
    const duration = parseFloat(element.dataset.duration || "1");

    const preset = animationPresets[animationType as keyof typeof animationPresets] || animationPresets.fadeIn;

    // Set initial state
    gsap.set(element, preset);

    // Check if element is already in viewport
    const alreadyVisible = isInViewport(element, window.innerHeight * 0.15);

    if (alreadyVisible) {
      // Animate immediately if already in viewport
      gsap.to(element, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: premiumEasing.soft,
      });
    } else {
      // Animate on scroll
      gsap.to(element, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: premiumEasing.soft,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          once: true,
          immediateRender: false,
        },
      });
    }

    element.dataset.animated = "true";
  });

  // Staggered animations for groups
  gsap.utils.toArray<HTMLElement>("[data-animate-group]").forEach((group) => {
    // Skip if already animated
    if (group.dataset.animated === "true") return;
    
    const children = group.querySelectorAll<HTMLElement>("[data-animate-item]");
    if (children.length === 0) return;
    
    const animationType = group.dataset.animateGroup || "fadeIn";
    const staggerDelay = parseFloat(group.dataset.staggerDelay || "0.15");

    const preset = animationPresets[animationType as keyof typeof animationPresets] || animationPresets.fadeIn;

    // Set initial state for all children
    gsap.set(children, preset);

    // Check if group is already in viewport
    const alreadyVisible = isInViewport(group, window.innerHeight * 0.15);

    if (alreadyVisible) {
      // Animate immediately if already in viewport
      gsap.to(children, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: premiumEasing.soft,
        stagger: staggerDelay,
      });
    } else {
      // Animate on scroll
      gsap.to(children, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: premiumEasing.soft,
        stagger: staggerDelay,
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          once: true,
          immediateRender: false,
        },
      });
    }

    group.dataset.animated = "true";
  });

  // Parallax effect for hero images
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
    if (element.dataset.parallaxInitialized === "true") return;
    
    const speed = parseFloat(element.dataset.parallax || "0.5");

    gsap.to(element, {
      y: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    element.dataset.parallaxInitialized = "true";
  });

  // Scale on scroll for hero images
  gsap.utils.toArray<HTMLElement>("[data-scale-on-scroll]").forEach((element) => {
    if (element.dataset.scaleInitialized === "true") return;
    
    gsap.to(element, {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    element.dataset.scaleInitialized = "true";
  });
};

// Cleanup function
export const cleanupScrollAnimations = () => {
  if (typeof window !== "undefined") {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // Reset animation flags
    document.querySelectorAll("[data-animated]").forEach((el) => {
      (el as HTMLElement).dataset.animated = "false";
    });
    document.querySelectorAll("[data-parallax-initialized]").forEach((el) => {
      (el as HTMLElement).dataset.parallaxInitialized = "false";
    });
    document.querySelectorAll("[data-scale-initialized]").forEach((el) => {
      (el as HTMLElement).dataset.scaleInitialized = "false";
    });
  }
};

// Utility function to animate element on mount
export const animateOnMount = (
  element: HTMLElement | null,
  animationType: keyof typeof animationPresets = "fadeIn",
  delay: number = 0
) => {
  if (!element) return;

  const preset = animationPresets[animationType];
  
  gsap.from(element, {
    ...preset,
    duration: 1,
    delay,
    ease: premiumEasing.soft,
  });
};

// Utility for staggered reveal
export const animateStaggered = (
  elements: HTMLElement[] | NodeListOf<HTMLElement>,
  animationType: keyof typeof animationPresets = "fadeIn",
  staggerDelay: number = 0.15
) => {
  if (elements.length === 0) return;

  const preset = animationPresets[animationType];

  gsap.from(elements, {
    ...preset,
    duration: 1,
    stagger: staggerDelay,
    ease: premiumEasing.soft,
    scrollTrigger: {
      trigger: elements[0]?.parentElement || elements[0],
      start: "top 85%",
      toggleActions: "play none none reverse",
      once: true,
    },
  });
};
