/*!
 * Naked Password Version 0.2.3
 * http://www.nakedpassword.com
 *
 * Copyright 2010, Platform45
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
 
jQuery.fn.nakedPassword=function(i){return this.each(function(){function f(){var a;a=$(this).val();a=+(a.length>5)+ +(/[a-z]/.test(a)&&/[A-Z]/.test(a))+ +(/\d/.test(a)&&/\D/.test(a))+ +(/[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/.test(a)&&/\w/.test(a))+ +(a.length>12);var g=$(this).attr("id");for(b=0;b<=5;b++)b==a?$("#"+g+"pic"+b).fadeIn():$("#"+g+"pic"+b).fadeOut()}var e=$.extend({path:"images/",width:30,height:28},i),c=$(this).position(),d=$(this).outerHeight(),j=$(this).outerWidth(),h=(d-6)/e.height*e.width;d=d-6;c={position:"absolute",display:"none",opacity:1,left:c.left+j-(h+3)+"px",top:c.top+3+"px",margin:"0px",marginTop:($.browser.safari?3:1)+"px"};for(var b=0;b<=5;b++){$(this).after("<div style='display:none;' id='"+$(this).attr("id")+"pic"+b+"'><img src='"+e.path+b+".png' width='"+h+"' height='"+d+"px' /></div>");$("#"+$(this).attr("id")+"pic"+b).css(c)}$(this).bind("keyup",f).bind("blur",f)})};
