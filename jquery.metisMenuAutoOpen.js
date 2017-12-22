;
(function(global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('jquery'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.jquery);
        global.metisMenuAutoOpen = mod.exports;
    }
})(this, function(_jquery) {
    var pluginName = "metisMenuAutoOpen",
        defaults = {
            classToAdd: 'current-page-item',
            currentLocation: window.location
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = _jquery.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            var $this_element = _jquery(this.element),
                $classToAdd = this.settings.classToAdd,
                $currentLocation = this.settings.currentLocation;
            if (!window.location.origin) {
                window.location.origin = window.location.protocol + "//" + window.location.host;
            }
            $currentLocation = window.location.origin + $currentLocation;
            $this_element.find("li .nav-second-level li a").each(function() {
                var url = _jquery(this).prop('href');
                if ($currentLocation == url) {
                    _jquery(this).parentsUntil('ul').addClass($classToAdd);
                    _jquery(this).parentsUntil('.nav-second-level').parent().addClass("in");
                    _jquery(this).parentsUntil('#side-menu', 'li:not(.' + $classToAdd + ')').addClass("active");
                    return false;
                }
            });
        }
    };
    _jquery.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!_jquery.data(this, "plugin_" + pluginName)) {
                _jquery.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
});
