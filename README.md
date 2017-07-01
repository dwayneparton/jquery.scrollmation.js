ScrollMation
============

Javascript plugin to makes elements animate on scroll.

ScrollMation is designed to help developers animate elements on the scroll. Elements flyin and fade out as the user scrolls down the page. It's not super glamorous but it's a start.

## How it works

Each element you animate needs an ID. This isn't ideal, I know, but it get's the job done for now. Maybe I'll fix this later.
	
### Element Options

```javascript
$("#element").scrollMation({
	action : "",//fadeIn,fadeOut,flyIn
    scrollPos: height-(height*.1),// When to start the scroll. Distance from the top of screen.
    duration: duration = (height-247)*.35, // How log the animation lasts. This is a number of scrolled pixels.
    startPos: "", // Elements initial starting postion
    endPos: "",   // Elements ending postion
});
```

Make sure you include jQuery and the Scrollmation plugin on your page.

```javascript
$(document).ready(function() {
	//Create all your animations in a function. You define what you want to animate and how.
	function yourAnimations(){
		$("#title2").scrollMation({action : 'fadeIn',});
		$("#title").scrollMation({action : 'fadeIn',});
		$("#title").scrollMation({action : 'flyIn', startPos : 400, endPos: 0,});
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

```javascript
$(document).ready(function() {
	//Create all your animations in a function. You define what you want to animate and how.
	function yourAnimations(){
		$("#fadeoutCode").scrollMation({action : 'fadeOut',});
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
			$("#flyrightCode").scrollMation({action : 'fadeIn', startPos : -600, endPos: 0,});
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