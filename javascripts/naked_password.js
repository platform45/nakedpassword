jQuery.fn.nakedPassword = function (options) {
	return this.each (function () {

		var settings = {path : "images/"}
		var settings = $.extend(settings, options);


		var prev_password_level = 0;

		var trigger = function(e) {
			var forward = false
			password_level = getPasswordStrength($(this).val());
			if(prev_password_level <= password_level){
				forward = true;
			}

			switch(password_level){
				case 0:
				$("#pic0").fadeIn();
				$("#pic1").fadeOut();
				$("#pic2").fadeOut();
				$("#pic3").fadeOut();
				$("#pic4").fadeOut();
				break;

				case 1:
				$("#pic0").fadeOut();
				$("#pic1").fadeIn();
				$("#pic2").fadeOut();
				$("#pic3").fadeOut();
				$("#pic4").fadeOut();
				break;

				case 2:
				$("#pic0").fadeOut();
				$("#pic1").fadeOut();
				$("#pic2").fadeIn();
				$("#pic3").fadeOut();
				$("#pic4").fadeOut();
				break;

				case 3:
				$("#pic0").fadeOut();
				$("#pic1").fadeOut();
				$("#pic2").fadeOut();
				$("#pic3").fadeIn();
				$("#pic4").fadeOut();
				break;

				case 4:
				$("#pic0").fadeOut();
				$("#pic1").fadeOut();
				$("#pic2").fadeOut();
				$("#pic3").fadeOut();
				$("#pic4").fadeIn();
				break;

				case 5:
				$("#pic0").fadeOut();
				$("#pic1").fadeOut();
				$("#pic2").fadeOut();
				$("#pic3").fadeOut();
				$("#pic4").fadeIn();
				break;

			}

		}//end trigger

			function getPasswordStrength(password){
				var score   = 0;

				//if password bigger than 4 give 1 point
				if (password.length > 4) score++;

				//if password has both lower and uppercase characters give 1 point 
				if ( ( password.match(/[a-z]/) ) && ( password.match(/[A-Z]/) ) ) score++;

				//if password has at least one number give 1 point
				if (password.match(/\d+/)) score++;

				//if password has at least one special caracther give 1 point
				if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ) score++;

				//if password bigger than 12 give another 1 point
				if (password.length > 8) score++;

				return score;
			}



			position   = $(this).position();
			input_height     = $(this).outerHeight();
			input_width      = $(this).outerWidth();

			
			pic_width = (((input_height-6)/28)*30); //30 x 28
			pic_height = input_height - 6;
			
			properties = {
            position:   'absolute',
						//display: 'none'
            opacity:     1.0,
            left:       (position.left + input_width - (pic_width+3)),
            top:        (position.top + 3),
            margin:     0 + "px",
          }

					if($.browser.safari){
            properties.marginTop = 3 + "px";
          }
          else{
            properties.marginTop = 1 + "px";
          }



			$(this).after("<div id='pic0'><img src='" + settings.path + "0.png' width='" + pic_width + "' height='" + pic_height + "px' /></div>");
			$(this).after("<div id='pic1'><img src='" + settings.path + "1.png' width='" + pic_width + "' height='" + pic_height + "px' /></div>");
			$(this).after("<div id='pic2'><img src='" + settings.path + "2.png' width='" + pic_width + "' height='" + pic_height + "px' /></div>");
			$(this).after("<div id='pic3'><img src='" + settings.path + "3.png' width='" + pic_width + "' height='" + pic_height + "px' /></div>");
			$(this).after("<div id='pic4'><img src='" + settings.path + "4.png' width='" + pic_width + "' height='" + pic_height + "px' /></div>");
			
			for(i = 0; i < 5; i++){
				$("#pic" + i).css(properties);
			}


			$(this).bind('keyup', trigger).bind('blur', trigger);
		});
	}