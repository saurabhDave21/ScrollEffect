window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to('.marque', {
            x: "-200%", // Move left
            repeat: -1,
            duration: 2,
            ease: "none",
        });
        gsap.to('.marque img', {
            rotate: 180
        });
    } else {
        gsap.to('.marque', {
            x: "0%", // Move back to start
            repeat: -1,
            duration: 2,
            ease: "none",
        });
        gsap.to('.marque img', {
            rotate: 0
        });
    }
});
