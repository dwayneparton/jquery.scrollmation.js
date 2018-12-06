ScrollMation
============

Javascript plugin to makes elements animate on scroll. Veiw it here: [Scrollmation Examples](https://dwayneparton.github.io/jquery.scrollmation.js/)

ScrollMation is designed to help developers animate elements on the scroll. Elements flyin and fade out as the user scrolls down the page. It's not super glamorous but it's a start.

## How it works
	
### Element Options

```javascript
$("#element").scrollMation({
	action : "fadeIn", // fadeIn,fadeOut,flyIn
	scrollPos: height-(height*.1), // When to start the scroll. Distance from the top of screen. height = $( window ).height();
	duration: (height-247)*.35, // How log the animation lasts. This is a number of scrolled pixels. 
	startPos: 600, // Elements initial starting postion, used for flyIn
	endPos: 0, // Elements ending postion, used for flyIn
});
```

Make sure you include jQuery and the Scrollmation plugin on your page.

```javascript
$(document).ready(function() {
	//Create all your animations in a function. You define what you want to animate and how.
	function yourAnimations(){
		//Animate multiple objects the same way
		$(".fadein").scrollMation({action : 'fadeIn',});
		//FadeIn Code Example
		$("#fadeinCode").scrollMation({action : 'fadeIn',});
		//FadeOut Code Example
		$("#fadeoutCode").scrollMation({action : 'fadeOut', scrollPos : 250,});
		//FadeOut Code Example
		$("#flyrightCode").scrollMation({action : 'flyIn', startPos : 600, endPos: 0,});
		//FadeOut Code Example
		$("#flyleftCode").scrollMation({action : 'flyIn', startPos : -600, endPos: 0,});
		//Multiple Code Example
		$("#multipleCode").scrollMation({action : 'fadeIn',});
		$("#multipleCode").scrollMation({action : 'flyIn', startPos : -600, endPos: 0,});
	}
	//Initiate the animations so that they apply before the user starts scrolling.
	yourAnimations();
	//Add the scroll event and call the animations function.
	$(window).scroll(function(){
		yourAnimations();
	});
});
```

## Keep Scrolling for Examples.

### Fading In

```javascript
$(document).ready(function() {
	//Create all your animations in a function. You define what you want to animate and how.
	function yourAnimations(){
		$("#fadeinCode").scrollMation({action : 'fadeIn',});
	}
	//Initiate the animations so that they apply before the user starts scrolling.
	yourAnimations();
	//Add the scroll event and call the animations function.
	$(window).scroll(function(){
		yourAnimations();
	});
});
```

### Fade Out

With fadeout you will want to add a higher scroll position.

```javascript
$(document).ready(function() {
	//Create all your animations in a function. You define what you want to animate and how.
	function yourAnimations(){
		$("#fadeoutCode").scrollMation({action : 'fadeOut', scrollPos : 250,});
	}
	//Initiate the animations so that they apply before the user starts scrolling.
	yourAnimations();
	//Add the scroll event and call the animations function.
	$(window).scroll(function(){
		yourAnimations();
	});
});
```

### Fly In

#### Fly From Right

```javascript
$(document).ready(function() {
		//Create all your animations in a function. You define what you want to animate and how.
		function yourAnimations(){
			$("#flyrightCode").scrollMation({action : 'fadeIn', startPos : 600, endPos: 0,});
		}
		//Initiate the animations so that they apply before the user starts scrolling.
		yourAnimations();
		//Add the scroll event and call the animations function.
		$(window).scroll(function(){
			yourAnimations();
		});
});
```
#### Fly From Left

```javascript
$(document).ready(function() {
	//Create all your animations in a function. You define what you want to animate and how.
	function yourAnimations(){
		$("#flyleftCode").scrollMation({action : 'fadeIn', startPos : -600, endPos: 0,});
	}
	//Initiate the animations so that they apply before the user starts scrolling.
	yourAnimations();
	//Add the scroll event and call the animations function.
	$(window).scroll(function(){
		yourAnimations();
	});
});
```
### Multiple Effects

You can add multiple effects to the same element. That's not really that impressive since there are only 3 effects but you can make a nice fade in slide effect like this:

```javascript
$(document).ready(function() {
	//Create all your animations in a function. You define what you want to animate and how.
	function yourAnimations(){
		$("#multipleCode").scrollMation({action : 'fadeIn',});
		$("#multipleCode").scrollMation({action : 'flyIn', startPos : -600, endPos: 0,});
	}
	//Initiate the animations so that they apply before the user starts scrolling.
	yourAnimations();
	//Add the scroll event and call the animations function.
	$(window).scroll(function(){
		yourAnimations();
	});
});
```

### Apply Same Effect to Muliple Objects

You can apply effects to elements of a certain class by definine the class animation:

```javascript
$(document).ready(function() {
	//Create all your animations in a function. You define what you want to animate and how.
	function yourAnimations(){
		$(".fadein").scrollMation({action : 'fadeIn',});
	}
	//Initiate the animations so that they apply before the user starts scrolling.
	yourAnimations();
	//Add the scroll event and call the animations function.
	$(window).scroll(function(){
		yourAnimations();
	});
});
```

## Things Worth Noting

* You may need to add overflow:hidden; to the container or <body style="overflow-x: hidden;"> in order to prevent the scroll bar from showing. May add this in the future.
