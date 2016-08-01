$(document).ready(function() {
	//менюшка
	//карусель
	 $(".owl-carousel").owlCarousel({
  	loop:true,
    margin: 20,
    autoplay: true,
    nav:true,
    navText : ["",""],
    items:2,
    mouseDrag:true,
    slideBy:5,
    dots:false
  });

	//minicart
	$(".minicart-wrapper").click(function() {
			if($(".block-minicart").css("display") == "none"){
				$(".block-minicart").show();
				$(".fa-shopping-cart").addClass("active");
			}else{
				$(".block-minicart").hide();
				$(".fa-shopping-cart").removeClass("active");
			}
		});
	$(".block-minicart .fa-times").click(function() {
		$(".block-minicart").hide();
		$(".fa-shopping-cart").removeClass("active");
	});

	//dunamic-items
	$(".dynamic-items li").hover(function () {
		$(".dynamic-items li").removeClass("dynamic-active");
		$(this).addClass("dynamic-active");
	})
	//dynamic-content
	$(".dynamic-items .nav-1").hover(function () {
		$(".dynamic-content .nav-item").removeClass("dynamic-active");
		$(".dynamic-content .nav-1").addClass("dynamic-active");
	})
	$(".dynamic-items .nav-2").hover(function () {
		$(".dynamic-content .nav-item").removeClass("dynamic-active");
		$(".dynamic-content .nav-2").addClass("dynamic-active");
	})
	$(".dynamic-items .nav-3").hover(function () {
		$(".dynamic-content .nav-item").removeClass("dynamic-active");
		$(".dynamic-content .nav-3").addClass("dynamic-active");
	})
	$(".dynamic-items .nav-4").hover(function () {
		$(".dynamic-content .nav-item").removeClass("dynamic-active");
		$(".dynamic-content .nav-4").addClass("dynamic-active");
	})
	$(".dynamic-items .nav-5").hover(function () {
		$(".dynamic-content .nav-item").removeClass("dynamic-active");
		$(".dynamic-content .nav-5").addClass("dynamic-active");
	})
	//toggle menu
		$(".toggle-menu").click(function () {
			if($(".nav-section").css("left") == "-795px"){
				$(".nav-section").css({
					left: "0px",
					transition: "all 1s"
				});
				$(".page-wrapper").css({
					left: "60%",
					width: "100%",
					position: "fixed",
					transition: "all 1s"
				});
			}
			else{
				$(".nav-section").css({
					left: "-795px",
					transition: "all 1s"
				});
				$(".page-wrapper").css({
					left: "0",
					position: "relative",
					transition: "all 1s"
				});
			}
		});

		//tabs-menu
		$(".tabs .tab-1").click(function () {
		$(".tab").removeClass("active-tab");
		$(".main-menu").addClass("active-tab");
	});
		$(".tabs .tab-2").click(function () {
		$(".tab").removeClass("active-tab");
		$(".account-menu").addClass("active-tab");
	});
		$(".tabs .tab-3").click(function () {
		$(".tab").removeClass("active-tab");
		$(".setting-menu").addClass("active-tab");
	});

	//adaptiv-menu-links
	$(".main-menu .main-tittle").click(function () {
		if($(this).parent().find(".drop-menu").css("position") == "absolute"){
		$(this).parent().find(".drop-menu").css({
			left: "0",
			position: "relative"
		});
		}else
		{
			$(this).parent().find(".drop-menu").css({
			left: "-9999px",
			position: "absolute"
		});
		}
	});
	$(".main-menu .main-tittle").click(function () {
		if($(window).width() <= 992){
		$(this).parent().find(".main-fa").slideToggle();
		}
	});
	$(".nav-dropdown").click(function () {
		if($(window).width() <= 992) {
			$(this).find(".wrap-items").slideToggle();
			$(this).find(".fa-plus").slideToggle();
		}
	});



	//disable hover
		resizeFix = function() {
    if ($( window ).width() <= 992) {
        $(".drop-menu").removeClass("hover");

         }
         else{
         	$(".drop-menu").addClass("hover");
         }
   };
   resizeFix();
       return $(window).on('resize', resizeFix);

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//запрещает перетягевать картинки при нажатии на них
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


});


 

    

 