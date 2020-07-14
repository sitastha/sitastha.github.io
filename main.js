$(document).ready(function(){
	$('.freelancer-info').hide().fadeIn(1500);
})

$(".toggle-bar").click(function() {
	if($(this).hasClass('open')) {
		$(this).removeClass('open');
		$('.navbar-holder').removeClass('side-navigation-left');
		$('.navbar').css('margin-left','0');
	} else {
		$(this).addClass('open');
		$('.navbar-holder').addClass('side-navigation-left');
		$('.navbar').css('margin-left','-235px');
	}
});


$(window).scroll(function() {
	if($(window).scrollTop()>10){
		$('.navbar').addClass('navbar-top');
		$('.navbar-holder').addClass('navbar-holder-top');
		$('.mobile-navigation').addClass('mobile-nav-top');
	} else{
		$('.navbar').removeClass('navbar-top');
		$('.navbar-holder').removeClass('navbar-holder-top');
		$('.mobile-navigation').removeClass('mobile-nav-top');
	}

	if($(window).scrollTop() > 350){
     	$(".col1").addClass("col1-display");
     	$(".col2").addClass("col2-display");
     	$(".col3").addClass("col3-display");
    } else{
    	$(".col1").removeClass("col1-display");
    	$(".col2").removeClass("col2-display");
    	$(".col3").removeClass("col3-display");
    }
	
	if($(window).scrollTop()>430) {
		$('.content').fadeIn(1000);
	}


});

/*mute youtube video*/
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady() {
    player.playVideo();
    player.mute();
}

/*modal popup*/

$('.open-modal-login').on('click', function(){
	$('.login-modal').show(500);
});

$('.close-modal').on('click', function(){
	$('.login-modal').hide(500);
});

