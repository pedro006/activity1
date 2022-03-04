(function () {

    'use strict';

    // breakpoint where swiper will be destroyed
    const breakpoint = window.matchMedia('(min-width:1024px)');

    // keep track of swiper instances to destroy later
    let slider;

    const checkBreakpoint = function () {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
            console.log('desktop')
            // clean up old instances and inline styles when available
            if (slider !== undefined) slider.destroy(true, true);
            // or/and do nothing
            return;
            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            console.log('mobile')
            // fire small viewport version of swiper
            return enableSlider();
        }
    };

    const enableSlider = function () {

        slider = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: false,
            slidesPerView: 'auto'
        });

    };

    // Listen to viewport size changes
    breakpoint.addListener(checkBreakpoint);

    // Init
    checkBreakpoint();

})();