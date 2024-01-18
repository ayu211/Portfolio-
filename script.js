var t1 = gsap.timeline();

t1.from('.navitem',{
    stagger: .3,
    duration: 2,
    y: 20,
    delay: 5,
    ease: 'Expo.easeInOut',
    opacity: 0
}).from('.leftItem', {
    stagger: .3,
    duration: 2,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
