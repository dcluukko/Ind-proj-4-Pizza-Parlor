//BL : Order Logic
function Order() {
	this.pizzaorders = [],
		this.currentId = 0
}

Order.prototype.getPizza = function (size, toppings) {
	var newPizza = new Pizza (size, toppings);
	console.log(newPizza)
	this.pizzas.push(newPizza);
}

//BL : Pizza Logic
function Pizza(size, toppings) {
	this.size = size,
		this.toppings = toppings
	this.cost = cost = []
}
//BL : Cost
Pizza.prototype.calcCost = function (size) {
	var calcPizzaCost = this.size * (2) + this.toppings[0]
	this.cost.push(parseInt(calcPizzaCost));
}
// User Interface Logic

var order = new Order();

function createNewPizza(size, toppings){
	order.orderPizza(size, toppings);
	order.pizzas[0].calcCost(order.pizzas[0].size);

}
$(document).ready(function () {
	var toppingInput = [];
	$("form#select-pizza-size-topping").submit(function () {
		event.preventDefault();
		var selectedSize = parseInt($("#pizza-size").val());
		console.log(selectedSize);
		$("input:checkbox[name=topping]:checked").each(function () {
			var pizzaToppingsChosen = $(this).val();
			toppingInput.push(pizzaToppingsChosen);
			console.log(pizzaToppingsChosen);
		});
		getPizza(selectedSize,toppingInput);
		
	});
});
