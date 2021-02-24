gsap.registerPlugin(ScrollTrigger);


gsap.from('.transitionOnScroll', {
    scrollTrigger: {
        trigger: '.transitionOnScroll',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})