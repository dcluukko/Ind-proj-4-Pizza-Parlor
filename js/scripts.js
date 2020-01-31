//BL : Pizza Logic
function Pizza() {
	this.toppings = [],
		this.currentId = 0
}

Pizza.prototype.addsize = function (size) {
	size.id = this.assignSizeId();
	this.size.push(size);
}

//BL : Size Logic
function Size(small, medium, large, mega) {
	this.small = small,
	this.medium = medium,
	this.large = large,
	this.mega = mega

	this.toppings = [],
	this.toppingsId = 0
}
//BL : Topping Logic
function Topping(soyCurls, broccoli, spinach, roastedToms) {
	this.soyCurls = soyCurls,
	this.broccoli = broccoli,
	this.spinach = spinach,
	this.roastedToms = roastedToms
}














// User Interface Logic
$(document).ready(function () {
	$("form#select-pizza-size-topping").submit(function(event) {
		event.preventDefault() 
			$("#pizza-time").show();
		$("input:checkbox[name=topping]:checked").each(function(){
			var checkedSize = $(this).val();
			$("#pizza-time").append(checkedSize + "<br>");
		});
	});
});