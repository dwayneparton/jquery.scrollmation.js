// ScrollMation
// A Rough Draft
(function( $ ) {
	//ScrollMation
	$.fn.scrollMation = function(options) {
		var height = $( window ).height();
		// ScrollMation Settings
        var settings = $.extend({
            // These are the defaults.
            action : "",//fadeIn,fadeOut,flyRight,flyLeft
            scrollPos: height-(height*.15),// When to start the scroll. Distance from the top of screen.
            duration: duration = (height-247)*.35, // How log the animation lasts. This is a number of scrolled pixels.
            startPos: "", // Elements initial starting postion
            endPos: "",   // Elements ending postion

        }, options );


        //Get the initial elements position
        var getPos = function(element){
			elementPos = element.offset().top;	
			pos = elementPos - $(window).scrollTop();
			return pos;
		}
		/** ADDED BY RDH **/
		// play nicely with STUPID IE
		var getOpacity = function(percentVal) {
		  return {
		  	"opacity": (percentVal/100), 
		  	"zoom":1,
		  	"filter": "progid:DXImageTransform.Microsoft.Alpha(opacity="+percentVal+")",
		  	"-ms-filter": "\"progid:DXImageTransform.Microsoft.Alpha(opacity="+percentVal+")\"",
		  	"filter": "alpha(opacity="+percentVal+")", 
			  "-moz-opacity": (percentVal/100),
			  "-khtml-opacity": (percentVal/100)
		  };
		};
		//FadeIn Animation
		var fadeIn = function(element){
			currentPos = getPos(element);
			endPos = settings.scrollPos - settings.duration;
			if(currentPos >= settings.scrollPos){
				element.css(getOpacity(0)); //RDH CHANGE
			} else if(currentPos <= endPos){
				element.css(getOpacity(100)); //RDH CHANGE
			} else {
				opacity = (settings.scrollPos-currentPos)/(settings.scrollPos-endPos);
				element.css(getOpacity(opacity*100)); //RDH CHANGE
			}
		}
		//FadeOut Animation
		var fadeOut = function(element){
			currentPos = getPos(element);
			endPos = settings.scrollPos - settings.duration;
			if(currentPos >= endPos){
				opacity = '100';
				element.css(getOpacity(100)); //RDH CHANGE
			} else {
				opacity = 1-(settings.scrollPos-currentPos)/(settings.scrollPos);
				element.css(getOpacity(opacity*100)); //RDH CHANGE
			}
		}
		//FlyIn Animation	
		var flyIn = function(element){
			endPos = settings.scrollPos - settings.duration;
			totalPropValue = settings.startPos+settings.endPos;
			currentPos = getPos(element);
			if(element.css('position') != 'absolute'){
				element.css({'position': 'relative'});
			}
			if(currentPos >= settings.scrollPos){
				element.css({'left': settings.startPos+'px'});
			} else if(currentPos <= endPos){
				element.css({'left': settings.endPos+'px'});
			} else {
				$left = (totalPropValue)*((settings.scrollPos-currentPos)/(settings.scrollPos-endPos));
				if(element.css('position') != 'absolute'){
					left = totalPropValue - $left;
				}else{
					left = $left;
				}
				element.css({'left': left+'px'});
			}
		}
		//Do the action
		if ( settings.action === "fadeIn") {
            return fadeIn(this);
        }
        if ( settings.action === "fadeOut" ) {
            return fadeOut(this);
        }
        if ( settings.action === "flyIn" ) {
            return flyIn(this);
        }
	};
}( jQuery ));