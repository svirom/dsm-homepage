$(document).ready(function() {

// Preloader
    $(window).on('load', function() {
        // will first fade out the loading animation
        $("#loader").fadeOut();
        //then background color will fade out slowly
        $("#loader-wrapper").delay(200).fadeOut("slow");

    });

// Add downarrow to submenus
    $('.home_nav li a').each(function() {
        if ($(this).next().length > 0) {
            $(this).append('&nbsp;&nbsp;<i class="fas fa-angle-double-down"></i>');
        }
    });

// smooth scroll readmore button and a anchor #
    $('.readmore, .home_nav a[href^="#"], .btn_plans').bind('click.smoothscroll', function(e) {
        var target = this.hash,
            $target = $(target);
        e.preventDefault();

        if (this.hash) {
            var topDiff = $target.offset().top;

            if ((this.hash == "#pricing") && ($(document).width() >= 768)) {
                topDiff = topDiff - 20;
            } else if ((this.hash == "#integrations_section") && ($(document).width() >= 768)) {
                topDiff = topDiff - 20;
            } else {
                topDiff = topDiff - 60;
            }

            $('html, body').stop().animate({
                'scrollTop': topDiff
        	   }, 600, 'swing', function() {
            });
            $('#responsive-menu').removeClass('in');
        }
        
    });

// show/hide submenu on hover
    if ($(document).width() >= 768) {
        $('.home_nav .dropdown').on({
            mouseenter: function() {
                $(this).find('ul').stop().slideDown(300);
            },
            mouseleave: function() {
                $(this).find('ul').stop().slideUp(300);
            }
        })
    }
// show/hide menu by click on menu button (768)
    $('.home_nav .dropdown').click(function() {
        if ($(document).width() < 768) {
            $(this).find('ul').slideToggle(500);
        }
    });

// submenu triangle on hover
    $('.home_nav .dropdown ul > li:first-child a').on({
        mouseenter: function () {
            $(this).closest('ul').addClass('active_first');
        },
        mouseleave: function () {
            $(this).closest('ul').removeClass('active_first');
        },
    });
    
// scroll to top function
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                $('#back_to_top').css('display', 'block');
                $('.main_nav').addClass("bkgr"); //background of top menu
            } else {
                $('#back_to_top').css('display', 'none');
                $('.main_nav').removeClass("bkgr"); //background of top menu
            }
        });
    });

    $('#back_to_top').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        $('html, body').stop().animate({
            'scrollTop': 0
        }, 600, 'swing', function() {});
    });

//Prevent to click links in features slider on mobile
    $('a.features_link').on('click', function(e) {
        if ($(document).width() < 768) {
            e.preventDefault();
        }
    });
//Swipe features slider slides
    $("#features_carousel, #reviews_carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function(event){
            var xMove = event.originalEvent.touches[0].pageX;
            if( Math.floor(xClick - xMove) > 9 ){
                $(this).carousel('next');
            }
            else if( Math.floor(xClick - xMove) < -9 ){
                $(this).carousel('prev');
            }
        });
        $("#features_carousel, #reviews_carousel").on("touchend", function(){
                $(this).off("touchmove");
        });
    });

//Reviews carousel indicators
    $(document).ready(function() {
        var reviewsCarousel = $('#reviews_carousel');
        var itemsCount = reviewsCarousel.find('.review_item');
        var reviewsIndicators = reviewsCarousel.find('.carousel-indicators');

        itemsArray = Array.from(itemsCount);
        itemsArray.forEach(function(item, i) {
            if (i === 0) {
                reviewsIndicators.append('<li data-target="#reviews_carousel" data-slide-to="' + i + '" class="active"></li>');
            } else {
                reviewsIndicators.append('<li data-target="#reviews_carousel" data-slide-to="' + i + '"></li>');
            }
        })
    })

//Video Button
    $(document).on("click", "button.video_button", function() {
        var $video = $(this).closest('.review_video').find('.videoWrapper iframe');
        var src = $video.attr('src');
        var buttonWrapper = $(this).closest('.review_video').find('.buttonWrapper');

        $video.attr('src', src + '&autoplay=1');
        buttonWrapper.css("display", "none");
    });

//shining stars in header section (earth globe)
    $(function() {
        var body = $('#starshine'),
            template = $('.template.shine'),
            stars = 30,
            sparkle = 12;

        var size = 'small';
        var createStar = function() {
            template.clone().removeAttr('id').css({
                top: (Math.random() * 100) + '%',
                left: (Math.random() * 100) + '%',
                webkitAnimationDelay: (Math.random() * sparkle) + 's',
                mozAnimationDelay: (Math.random() * sparkle) + 's'
            }).addClass(size).appendTo(body);
        };

        for (var i = 0; i < stars; i++) {
            if (i % 2 === 0) {
                size = 'small';
            } else if (i % 3 === 0) {
                size = 'medium';
            } else {
                size = 'large';
            }

            createStar();
        }
    });


//Plans slider
	var plansNames = [
        'Free Plan',
        'Lite Plan',
        'Basic Plan',
        'Seller Plan',
        'Magnum Plan',
        'Pro Plan',
        'Royal Plan',
        'Royal+ Plan',
        'Royal 5K Plan',
        'Royal 6k Plan',
        'Royal 7k Plan',
        'Royal 8k Plan',
        'Royal 9k Plan',
        'Custom 10K Plan',
        'Custom 11K Plan',
        'Custom 13K Plan',
        'Custom 14K Plan',
        'Custom 15K Plan',
        'Custom 16K Plan',
        'Custom 17K Plan',
        'Custom 18K Plan',
        'Custom 19K Plan',
        'Custom 20k Plan',
        'Custom 21K Plan',
        'Custom 22K Plan',
        'Custom 23K Plan',
        'Custom 24K Plan',
        'Custom VIP 25K Plan',
        'Need more? Contact us'
    ];
    var plansPrices = [
        '0',
        '9.97',
        '14.97',
        '24.97',
        '39.97',
        '64.97',
        '89.97',
        '119.97',
        '149.97',
        '179.97',
        '209.97',
        '239.97',
        '269.97',
        '289.97',
        '318.97',
        '376.97',
        '405.97',
        '434.97',
        '463.97',
        '492.97',
        '521.97',
        '550.97',
        '579.97',
        '608.97',
        '637.97',
        '666.97',
        '695.97',
        '699.97',
        ''
    ];
    var plansItems = [
        '50',
        '150',
        '300',
        '600',
        '1200',
        '2000',
        '3000',
        '4000',
        '5000',
        '6000',
        '7000',
        '8000',
        '9000',
        '10000',
        '11000',
        '13000',
        '14000',
        '15000',
        '16000',
        '17000',
        '18000',
        '19000',
        '20000',
        '21000',
        '22000',
        '23000',
        '24000',
        '25000',
        '>25000'
    ];
    // show plans on slider
    $(function() {
        $( "#slider-range-min" ).slider({
          range: "min",
          animate: true,
          value: 0,
          min: 0,
          step: 1,
          max: plansNames.length - 1,
          slide: function( event, ui ) {
            $(".a, .b, .c, .d").width(plansPrices[ui.value] + "%");
            updateDetails(ui.value);
          }
        });
        // prepare slider details
        var value = $( "#slider-range-min" ).slider("value");
        $(".ui-slider-handle").html("<span class='slider_img'></span>");
        updateDetails(value);
        
        function updateDetails(value) {
            // if contact us
            if (isNaN(plansItems[value])) {
                $("#amount span.values").text(plansItems[value]);
                $("#price").hide();
                $(".text_listings").hide();
                $('#plan-name').text(plansNames[value]);
                $('#price-per-list').hide();
                $('#upgrade-button').hide();
                return;
            }
            // else 
            $('#upgrade-button').show();
            $("#price").show();
            $(".text_listings").show();
            $('#price-per-list').show();
            $("#amount span.values").text(plansItems[value]);
            $( "#price span.values" ).text("$" + plansPrices[value]);
            var perList = Math.ceil(plansPrices[value])/plansItems[value];
            perList = ((perList * 100) % 1 === 0 ? perList.toFixed(2) : ((perList * 1000) % 1 === 0 ? perList.toFixed(3) : perList.toFixed(4)));
            $('#price-per-list span.values').text(perList);
            $('#plan-name').text(plansNames[value]);
            
            // show/hide features according to plan
            if (plansItems[value] < 150) {
                $('.lite, .pro').each(function() {
                    $(this).removeClass('active');
                });
                $('.vendors').html('<p><i class="fas fa-check"></i>amazon.com, walmart.com</p>');
            }
            if ((plansItems[value] >= 150) && (plansItems[value] < 600)) {
                $('.lite').each(function() {
                    $(this).addClass('active');
                });
                $('.pro').each(function() {
                    $(this).removeClass('active');
                });
                $('.vendors').html('<p><i class="fas fa-check"></i>All Source Vendors</p>');
            }
            if (plansItems[value] >= 600) {
                $('.lite, .pro').each(function() {
                    $(this).addClass('active');
                });
                $('.vendors').html('<p><i class="fas fa-check"></i>All Source Vendors</p>');
                if (plansItems[value] >= 10000) {
                    $('.royal').each(function() {
                        $(this).show();
                    });
                } else {
                    $('.royal').each(function() {
                        $(this).hide();
                    });
                }
            }
        }
    });

});