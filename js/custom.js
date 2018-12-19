$(document).ready(function() {


//changing line rows in header section
	var change_text = [
		'Listing from Amazon to eBay ',
		'Auto-Order Chrome Extension ',
		'CRM system for eBay ',
		'Sales & Profits Statistics ',
		'5 Responsive Templates ',
		'Item Grabber Chrome Extension ',
		'Store Optimization Alerts ',
		'Auto Customer Service ',
		'Auto restocking inventory ',
		'Management Dashboard ',
		'Customer message templates ',
		'Advanced images editor ',
		'Smart filter & bulk operations ',
		'Video guides & Help center '
	]
	
	$('.change_text').text(change_text[0]);
	var changeCounter = 0;
	var interval_text = setInterval(rotate_text, 3000);

	function rotate_text(){
		if (changeCounter < change_text.length) {
			$('.change_text').text(change_text[changeCounter]);
			changeCounter++;
		} else {
			changeCounter = 0;
			$('.change_text').text(change_text[changeCounter]);
			changeCounter++;
		}
	}

//smooth scroll readmore button and a anchor #
    $('.readmore, .home_nav a[href^="#"], .header_buttons a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);
        var topDiff = $target.offset().top;

        if ( (this.hash == "#pricing") && ($(document).width() >= 768) ) {
            topDiff = topDiff - 180;
        } else {
            topDiff = topDiff - 60;
        }

        $('html, body').stop().animate({
            'scrollTop': topDiff
    	   }, 500, 'swing', function() {
        });
        $('#responsive-menu').removeClass('in');
    });
    
// scroll to top function
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('.back_to_top').fadeIn(600);
                } 
            else {
                $('.back_to_top').fadeOut(600);
                }
        });     
    });
    $('.back_to_top').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        $('html, body').stop().animate({
            'scrollTop': 0}, 600, 'swing', function() {
        });
    });

//background of top menu
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('.main_nav').addClass("bkgr");
                } 
            else {
                $('.main_nav').removeClass("bkgr");
            }
        });     
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
        $(".ui-slider-handle").html("<img src='./img/slider_icon.png'>");
        updateDetails(value);
        
        function updateDetails(value) {
            // if contact us
            if (isNaN(plansItems[value])) {
                $("#amount span").text(plansItems[value]);
                $("#price").hide();
                $('#plan-name').text(plansNames[value]);
                $('#price-per-list').hide();
                $('#upgrade-button').hide();
                return;
            }
            // else 
            $('#upgrade-button').show();
            $("#price").show();
            $('#price-per-list').show();
            $("#amount span").text(plansItems[value]);
            $( "#price span" ).text("$" + plansPrices[value]);
            var perList = Math.ceil(plansPrices[value])/plansItems[value];
            perList = ((perList * 100) % 1 === 0 ? perList.toFixed(2) : ((perList * 1000) % 1 === 0 ? perList.toFixed(3) : perList.toFixed(4)));
            $('#price-per-list span').text(perList);
            $('#plan-name').text(plansNames[value]);
            
            // show/hide features according to plan
            if (plansItems[value] >= 2000) {
                $('.pro').each(function() { $(this).show(); });
                if (plansItems[value] >= 10000) {
                    $('.royal').each(function() { $(this).show(); });
                } else {
                    $('.royal').each(function() { $(this).hide(); });
                }
            } else {
                $('.pro').each(function() { $(this).hide(); });
            }
        }
    });

//What Do We Offer
    var h = $(window).height();
   
    $(window).bind("scroll.once", function(){
        if ( ($(window).scrollTop() + h) >= $("#offer_section").offset().top) {
            weOffer();
        }
    });

    function weOffer(){
        var currCounter = 0;
        sliderTimer = setInterval(changeButtons, 5000);

        $(".left_section").find("#menu_wrapper li:first-child").addClass("active").end()
                        .find(".button_text").eq(0).addClass("active");
        $(".right_section").find(".right_panel").eq(0).css("display", "block");

        $("#menu_wrapper a").hover(
            function(){
                var d_attr = $(this).data("count");
                var rightAttr = $(this).attr("href");
                clearInterval(sliderTimer);
                $(".left_section").find("#menu_wrapper a").closest("li").removeClass("active")
                    .eq(d_attr).addClass("active");
                $(".left_section").find(".button_text").removeClass("active")
                    .eq(d_attr).addClass("active");
                $(".right_section").find(".right_panel").css("display", "none");
                $(rightAttr).stop().fadeIn();
            }, function(){
                currCounter = $(this).data("count");
                sliderTimer = setInterval(changeButtons, 5000);
            }
        );
        
        function changeButtons(){
            var rightId = $(".left_section").find("#menu_wrapper a").eq(currCounter+1).attr("href");

            if ( currCounter < ($("#menu_wrapper li").length - 1) ) {
                $(".left_section").find("#menu_wrapper a").closest("li").removeClass("active")
                    .eq(currCounter+1).addClass("active");
                $(".left_section").find(".button_text").removeClass("active")
                    .eq(currCounter+1).addClass("active");
                $(".right_section").find(".right_panel").css("display", "none");
                $(rightId).fadeIn();
                currCounter++;
            } else {
                currCounter = -1;
                rightId = $(".left_section").find("#menu_wrapper a").eq(0).attr("href");
                $(".left_section").find("#menu_wrapper a").closest("li").removeClass("active")
                    .eq(currCounter+1).addClass("active");
                $(".left_section").find(".button_text").removeClass("active")
                    .eq(currCounter+1).addClass("active");
                $(".right_section").find(".right_panel").css("display", "none");
                $(rightId).fadeIn();
                currCounter++;
            }
        }

        $("#menu_wrapper a").on("click", function(event){
            event.preventDefault();
        });
        /*$("#menu_wrapper a").on("click", function(event){
            event.preventDefault();
            clearInterval(sliderTimer);
            $(this).closest("ul").find("li").removeClass("active");
            $(this).closest("li").addClass("active");
            var rightId = $(this).attr("href");
            $(".right_section").find(".right_panel").css("display", "none");
            $(rightId).fadeIn();

        })*/
        $(window).unbind("scroll.once");
    }    

});