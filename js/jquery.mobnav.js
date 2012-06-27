/*!
 * jQuery Mobile Navigation Switcher v0.1
 * http://github.com/robost/mobnav
 *
 * Copyright 2012, Robert Österlind <rob@breach.nu>
 * MIT Licensed.
 *
 * http://github.com/robost/mobnav
 *
 * Date: Wed Jun 27 17:40:00 2012 +0100
 */

(function($){
	 $.fn.extend({ 

		mobnav: function(options) {

		var defaults = {
			convertWidth: 320,
			convertTrigger: 'load-resize'
		};
		var options = $.extend(defaults, options);         	
		var o = options;

	if($(window).width() <= o.convertWidth) {
		
		$(this).find('li').each(function() {
			if($(this).attr('class') !== undefined) {
				$(this).replaceWith('<option class="' + $(this).attr('class') + '" value="' + $(this).find('a').attr('href') + '">' + $(this).find('a').text() + '</option>');
			} else {
				$(this).replaceWith('<option value="' + $(this).find('a').attr('href') + '">' + $(this).find('a').text() + '</option>');				
			}
		});
		
		if($(this).attr('class') !== undefined) {
			$(this).replaceWith('<select id="' + this.attr('id') + '" class="' + this.attr('class') + '">' + this.html() + '</select>');
		} else {	
			$(this).replaceWith('<select id="' + this.attr('id') + '">' + this.html() + '</select>');
		}
		
		$('select#mobnav').change(function() {
			location.href = $(this).attr('value');
		});
			
	} else if($(window).width() > o.convertWidth && !$(this).is('ul')) {
		$('select#mobnav').find('option').each(function() {
			if($(this).attr('class') !== undefined) {			
				$(this).replaceWith('<li class="' + $(this).attr('class') + '"><a href="' + $(this).attr('value') + '">' + $(this).text() + '</a></li>');
			} else {
				$(this).replaceWith('<li><a href="' + $(this).attr('value') + '">' + $(this).text() + '</a></li>');			
			}	
		});
		
		if($(this).attr('class') !== undefined) {
			$('select#mobnav').replaceWith('<ul id="'+$('select#mobnav').attr('id')+'" class="'+$('select#mobnav').attr('class')+'">' + $('select#mobnav').html() + '</ul>');
		} else {
			$('select#mobnav').replaceWith('<ul id="'+$('select#mobnav').attr('id')+'">' + $('select#mobnav').html() + '</ul>');			
			}
		};
	}
});

})(jQuery);
