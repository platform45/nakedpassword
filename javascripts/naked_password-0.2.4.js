/*!
 * Naked Password Version 0.2.4
 * http://www.nakedpassword.com
 *
 * Copyright 2010, Platform45
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

jQuery.fn.nakedPassword = function(options){
	return this.each(function(){
		var defaults =
				{ path : "images/"
				, width: 30
				, height: 28
				, sex: 'f'
				},
			settings = $.extend(defaults, options);

		function trigger(){
			var password_level = getPasswordStrength($(this).val());
			toggleImg($(this).attr("id"), password_level);
		}

		function toggleImg(field, level){
			for(i = 0; i <= 5; i++){
				if(i == level){
					$("#" + field + "pic" + i).fadeIn();
				} else {
					$("#" + field + "pic" + i).fadeOut();
				}
			}
		}

		function getPasswordStrength(password){
			return 0
			// if password bigger than 5 give 1 point
			+ +( password.length > 5 )
			// if password has both lower and uppercase characters give 1 point
			+ +( /[a-z]/.test(password) && /[A-Z]/.test(password) )
			// if password has at least one number and at least 1 other character give 1 point
			+ +( /\d/.test(password) && /\D/.test(password) )
			// if password has a combination of other characters and special characters give 1 point
			+ +( /[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/.test(password) && /\w/.test(password) )
			// if password bigger than 12 give another 1 point (thanks reddit)
			+ +( password.length > 12 )
		}

		var position = $(this).position(),
			input_height = $(this).outerHeight(),
			input_width = $(this).outerWidth(),
			// maybe this magic number `6` should be documented?
			pic_width = ((input_height - 6) / settings.height) * settings.width,
			pic_height = input_height - 6,
			properties =
				{ position: 'absolute'
				, display: 'none'
				, opacity: 1
				, left: (position.left + input_width - (pic_width+3)) + "px"
				, top: (position.top + 3) + "px"
				, margin: "0px"
				, marginTop: ($.browser.safari ? 3 : 1) + "px"
				};

		for(var i = 0; i <= 5; i++){
			$(this).after("<div style='display:none;' id='" + $(this).attr("id") + "pic" + i + "'><img src='" + settings.path + settings.sex + i + ".png' width='" + pic_width + "' height='" + pic_height + "px' /></div>");
			$("#" + $(this).attr("id") + "pic" + i).css(properties);
		}

		$(this).bind('keyup', trigger).bind('blur', trigger);
	});
};
