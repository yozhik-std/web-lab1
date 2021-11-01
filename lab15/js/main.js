// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign").fadeIn();
		}
	}, 5000);
});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign1').click(function() { 
	
	$('.js-overlay-campaign1').fadeIn();
	$('.js-overlay-campaign1').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign1').click(function() { 
	$('.js-overlay-campaign1').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign1');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign1').fadeOut();
		
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign1').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign1").fadeIn();
		}
	}, 5000);
});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign2').click(function() { 
	
	$('.js-overlay-campaign2').fadeIn();
	$('.js-overlay-campaign2').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign2').click(function() { 
	$('.js-overlay-campaign2').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign2');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign2').fadeOut();
		
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign2').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign2").fadeIn();
		}
	}, 5000);
});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign3').click(function() { 
	
	$('.js-overlay-campaign3').fadeIn();
	$('.js-overlay-campaign3').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign3').click(function() { 
	$('.js-overlay-campaign3').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign3');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign3').fadeOut();
		
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign3').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign3").fadeIn();
		}
	}, 5000);
});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign4').click(function() { 
	
	$('.js-overlay-campaign4').fadeIn();
	$('.js-overlay-campaign4').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign4').click(function() { 
	$('.js-overlay-campaign4').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign4');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign4').fadeOut();
		
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign4').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign4").fadeIn();
		}
	}, 5000);
});
// Модальное окно

// открыть по кнопке
$('.js-button-campaign5').click(function() { 
	
	$('.js-overlay-campaign5').fadeIn();
	$('.js-overlay-campaign5').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign5').click(function() { 
	$('.js-overlay-campaign5').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign5');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign5').fadeOut();
		
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign5').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign5").fadeIn();
		}
	}, 5000);
});

