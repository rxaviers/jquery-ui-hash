require.config({
	paths: {
		jquery: "../bower_components/jquery/jquery",
		"jquery/ui/core": "../bower_components/jquery-ui/ui/jquery.ui.core",
		"jquery/ui/widget": "../bower_components/jquery-ui/ui/jquery.ui.widget",
		"jquery/ui/hash": "../src/jquery.ui.hash"
	},

	shim: {
		"jquery/ui/core": ["jquery"],
		"jquery/ui/widget": ["jquery"]
	}
});

require([
	"./spec/basic"
], function() {
	mocha.run();
});
