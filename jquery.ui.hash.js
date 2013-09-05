/*
 * jQuery UI Hash
 *
 * Copyright 2011, Rafael Xavier <rxaviers at gmail>
 * Dual licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function($, undefined) {

var hashClass = "ui-hash";

$.widget("ui.hash", {
	version: "@VERSION",
	widgetEventPrefix: "hash",

	options: {
	},

	set: function(key, el) {
		this.destroy(key);
		this.els[key] = el;
	},

	show: function(key) {
		this.clear();
		this.element.html(this.els[key]);
	},

	clear: function(ev, key) {
		this.element.children().detach();
	},

	destroy: function(key) {
		if(this.els[key]) {
			this.els[key].remove();
			delete this.els[key];
		}
	},

	destroy_all: function() {
		$.each(this.els, this.destroy);
	},

	_create: function() {
		this.els = {};
	}
});

})(jQuery);
