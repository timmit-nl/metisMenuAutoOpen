;(function ($, window, document, undefined) {

    var pluginName = "metisMenuAutoOpen",
        defaults = {
            classToAdd: 'current-page-item',
            currentLocation = window.location
        };
        
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {

            var $this_element = $(this.element),
                $classToAdd = this.settings.classToAdd;

						
							var currentLocation = this.settings.currentLocation;
						
							$this_element.find("li .nav-second-level li a").each(function(){
						    //var classname = $(this).attr('class');
						    var url = $(this).prop('href');
						    
								if(currentLocation == url){
									//alert(currentLocation);
									$(this).parentsUntil('ul').addClass($classToAdd);
									$(this).parentsUntil('.nav-second-level').parent().addClass("in");
									$(this).parentsUntil('#side-menu','li:not(.'+$classToAdd+')').addClass("active");
									return false;
									//ale:rt()'++';
								}    
						
						
						    //var width = images.width();
						    //var imgLength = images.length;
						    //$(this).find(".scrolling").width( width * imgLength * 1.2 );
							});

        }
    };

    $.fn[ pluginName ] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
