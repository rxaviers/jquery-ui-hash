define([
	"jquery",
	"jquery/ui/hash"
], function($) {

	describe("Basic functionalities", function() {

		var container = $("<div/>").hash().appendTo("body");

		container.hash("set", "myKey1", $("<div/>").data("id", 1));
		container.hash("set", "myKey2", $("<div/>").data("id", 2));

		it("should show set element", function() {
			container.hash("show", "myKey1");
			expect(container.children().length).to.equal(1);
			expect(container.children().data("id")).to.equal(1);
		});

		it("should detach inactive and show active element", function() {
			container.hash("show", "myKey2");
			expect(container.children().length).to.equal(1);
			expect(container.children().data("id")).to.equal(2);
		});

	});

});
