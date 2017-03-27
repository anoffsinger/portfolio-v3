$(document).ready(function() {

    // initialize mouse parallax
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    // initialize skollr parallax
    var s = skrollr.init({forceHeight: false});

    var body = $("body");
    var background = $(".background");
    var introGreeting = $(".intro-greeting");
    var introBody = $(".intro-body");
    var introHeading = $(".intro-heading");
    var about = $(".header-navigation-item-about");
    var work = $(".header-navigation-item-work");
    var aboutContent = $("#about");
    var content = $("#content");
    var nightmodeIndicator = $(".header-theme-indicator-nightmode")
    var indicatorTime = $(".header-theme-indicator-time")
    var nightmodeButton = $(".themes-button-nightmode");
    var daymodeButton = $(".themes-button-daymode");
    var navigation = $(".header-navigation-list");
    var navItem1 = $(".header-navigation-list > li:nth-of-type(1) a");
    var navItem2 = $(".header-navigation-list > li:nth-of-type(2) a");
    var navItem3 = $(".header-navigation-list > li:nth-of-type(3) a");

    // bg shapes
    var circle1 = $(".shape-circle-1");
    var circle2 = $(".shape-circle-2");
    var circle3 = $(".shape-circle-3");
    var circle4 = $(".shape-circle-4");
    var triangle1 = $(".shape-triangle-1");
    var triangle2 = $(".shape-triangle-2");
    var triangle3 = $(".shape-triangle-3");
    var triangle4 = $(".shape-triangle-4");
    var square1 = $(".shape-square-1");
    var square2 = $(".shape-square-2");
    var square3 = $(".shape-square-3");
    var square4 = $(".shape-square-4");
    var shapes = [circle1, circle2, circle3, circle4, triangle1, triangle2, triangle3, triangle4, square1, square2, square3, square4]
    var shapesSquaresCircles = [circle1, circle2, circle3, circle4, square1, square2, square3, square4]
    var shapesTriangles = [triangle1, triangle2, triangle3, triangle4]

    var d = new Date();
    var n = d.getHours();


    // setup
    nightmodeIndicator.addClass("header-theme-indicator-hovered");
    indicatorTime.addClass("header-theme-indicator-time-visible");



    // indicator hover interactions


    nightmodeIndicator.hover(
       function(){ $(this).removeClass('header-theme-indicator-hovered') },
       function(){ $(this).addClass('header-theme-indicator-hovered') }
    )

    // if (n < 18 && n > 6) {
    //     console.log("day");
    // } else {
    //     body.addClass('no-transition'); // Disable transitions
    //     body.addClass("background-nightmode");
    //     body[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
    //     body.removeClass('notransition'); // Re-enable transitions
    //     $.each(shapesSquaresCircles, function(index, value) {
    //         this.addClass("shape-nightmode");
    //     });
    // }

    // initialize lazy load
    // var bLazy = new Blazy({
    //     // load image 100px before you reach it
    //     offset: 100
    // });

    // set initial behaviors
    daymodeButton.addClass("themes-button-active");




    // navigation hover
    about.hover(function() {
        background.addClass("background-scaled");

    }, function() {
        background.removeClass("background-scaled");
    });

    // nightmode click
    about.click(function() {
        body.addClass("background-nightmode");
        content.addClass("content-hidden");
        about.addClass("content-hidden");
        work.addClass("content-visible");
        aboutContent.addClass("content-visible");
        // if (n < 18 && n > 6) {
        //     console.log("enable nightmode");
        //
        //     body.addClass("background-nightmode");
        //     content.addClass("content-hidden");
        //     about.addClass("content-hidden");
        //     work.addClass("content-visible");
        //     aboutContent.addClass("content-visible");
        // } else {
        //     console.log("enable daymode");
        //     body.removeClass("background-nightmode");
        //     content.addClass("content-hidden");
        //     about.addClass("content-hidden");
        //     work.addClass("content-visible");
        //     aboutContent.addClass("content-visible");
        // }

        // introHeading.addClass("intro-heading-nightmode");
        // introGreeting.addClass("intro-greeting-nightmode");
        // introBody.addClass("paragraph-dark");
        // daymodeButton.removeClass("themes-button-active");
        // nightmodeButton.addClass("themes-button-active");
        // navItem1.addClass("header-navigation-item-active-nightmode")
        // navItem2.addClass("header-navigation-item-inactive-nightmode")
        // navItem3.addClass("header-navigation-item-inactive-nightmode")

        $.each(shapesSquaresCircles, function(index, value) {
            this.addClass("shape-nightmode");
        });

        $.each(shapesTriangles, function(index, value) {
            this.addClass("shape-nightmode-triangle");
        });
    });

    work.click(function() {
        body.removeClass("background-nightmode");
        content.removeClass("content-hidden");
        about.removeClass("content-hidden");
        work.removeClass("content-visible");
        aboutContent.removeClass("content-visible");
        // introHeading.removeClass("intro-heading-nightmode");
        // introGreeting.removeClass("intro-greeting-nightmode");
        // introBody.removeClass("paragraph-dark");
        // nightmodeButton.removeClass("themes-button-active");
        // daymodeButton.addClass("themes-button-active");
        // navItem1.removeClass("header-navigation-item-active-nightmode")
        // navItem2.removeClass("header-navigation-item-inactive-nightmode")
        // navItem3.removeClass("header-navigation-item-inactive-nightmode")


        $.each(shapesSquaresCircles, function(index, value) {
            this.removeClass("shape-nightmode");
        });

        $.each(shapesTriangles, function(index, value) {
            this.removeClass("shape-nightmode-triangle");
        });
    });

    // navItem1.click(function() {
    //     background.addClass("background-scaled");
    //     background.removeClass("background-hidden");
    // });
    //
    // navItem2.click(function() {
    //     background.removeClass("background-scaled");
    //     background.addClass("background-hidden");
    // });
    //
    // navItem3.click(function() {
    //     background.removeClass("background-scaled");
    //     background.addClass("background-hidden");
    // });



    $(window).on('scroll', function() {
       var st = $(this).scrollTop();
    //    console.log(st);

       if (st > 550) {
           console.log("workinggg");
           $(".work-item").each(function(i) {
              $(this).delay((i + 1) * 200).addClass("work-item-loaded");
           });
       }
       /* avoid unnecessary call to jQuery function */
    //    if (st <= limit) {
    //       divs.css({ 'opacity' : (1 - st/limit) });
    //    }
    });




});
