/*!
* jquery.scrollmation.js
* Copyright (c) 2013 Dwayne Parton - dwayne<a>modestbye<d>com | http://www.modestbyte.com
* Licensed under MIT
*/

;(function ( $, window, document, undefined ){
	var pluginName = 'scrollmation',
					defaults = {
						action: "fadein",
						startPos: $( window ).height(),
						duration: $( window ).height()*.35
					};

	//private functionss
	var get = {
		//gets elements current position
		position: function(element){
			elementPos = $(element).offset().top;      
			pos = elementPos - $(window).scrollTop();
			return pos;
		},
		//gets the default property value of an element
		propertyValue: function(element, property){

		},
		//makes the opacity browser compatible
		opacity: function(val){
			return {
				"opacity": (val/100), 
				"zoom":1,
				"filter": "progid:DXImageTransform.Microsoft.Alpha(opacity="+val+")",
				"-ms-filter": "\"progid:DXImageTransform.Microsoft.Alpha(opacity="+val+")\"",
				"filter": "alpha(opacity="+val+")", 
				"-moz-opacity": (val/100),
				"-khtml-opacity": (val/100)
			  };
		}
	};

	//construct
	function Plugin(element, options){
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init(this.settings['action']);
	};

	//init logic
	Plugin.prototype = {
		init: function(act){
			this[act]();
		},
		fadein: function(){
			element = this.element;
			currentPos = get.position(element);
			startPos = this.settings['startPos'];
			duration = this.settings['duration'];

			endPos = startPos - duration;
			if(currentPos >= startPos){
				$(element).css(get.opacity(0));
			} else if(currentPos <= endPos){
				$(element).css(get.opacity(100));
			} else {
				opacity = (startPos-currentPos)/(startPos-endPos);
				$(element).css(get.opacity(opacity*100));
			}
			//alert(get.position(this.element));
		}
		//fadeout: function(){},
		//flyup: function(){},
		//flyright: function(){},
		//flydown: function(){},
		//flyleft: function(){}
	};

	//plugin wrapper
	$.fn[ pluginName ] = function ( options ) {
		this.each(function() {
			 if ( !$.data( this, "plugin_" + pluginName ) ) {
			 	object = this; 
			 	jQuery(window).scroll(function() {
					$.data( object, "plugin_" + pluginName, new Plugin( object, options ) );
				});
			}
		});
	};
})( jQuery, window, document );