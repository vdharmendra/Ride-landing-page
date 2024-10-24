// // ANIMATION 
// gsap.from('header', {duration: 0.9, ease: "power2.out", y: -60})
// gsap.from('.hero-content', {duration: 0.7, ease:"power2.out", opacity:0, y:-40, delay:1 })
// gsap.from('.illutration', {duration: 0.7, ease:"power2.out", opacity:0, y:-40, delay:1 })

let tl = gsap.timeline({ delay :1});
tl.from('header', {duration: 0.9, ease: "power2.out", y: -60});
tl.from('.hero-content', {duration: 0.7, ease:"power2.out", opacity:0, y:-40,});
tl.from('.illutration', {duration: 0.7, ease:"power2.out", opacity:0, y:-40, })