let locoScroll;

function init() {
    gsap.registerPlugin(ScrollTrigger);

    locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

init();

// Navigation Function
function scrollToSection(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        locoScroll.scrollTo(target);
    }
}

// Custom Cursor
var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px";
    crsr.style.top = dets.y + 20 + "px";
});

// Hero Animations
gsap.from(".page1 h1, .page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});

tl.to(".page1 h1", {
    x: -100,
}, "anim");

tl.to(".page1 h2", {
    x: 100
}, "anim");

tl.to(".page1 video", {
    width: "90%"
}, "anim");


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        start: "top 60%",
        end: "top 30%",
        scrub: 2
    }
});

tl2.to(".main", {
    backgroundColor: "#fff",
});


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        scroller: ".main",
        start: "top 60%",
        end: "top 30%",
        scrub: 2
    }
});

tl3.to(".main", {
    backgroundColor: "#0F0D0D"
});


var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var att = elem.getAttribute("data-image");
        crsr.style.width = "470px";
        crsr.style.height = "370px";
        crsr.style.borderRadius = "0";
        crsr.style.backgroundImage = `url(${att})`;
    });
    elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "transparent";
        crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.borderRadius = "50%";
        crsr.style.backgroundImage = `none`;
    });
});
