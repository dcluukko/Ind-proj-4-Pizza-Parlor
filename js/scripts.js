//BL : Order Logic
function Order() {
	this.pizzaOrders = [],
		this.currentId = 0
}

Order.prototype.getPizza = function (size, toppings) {
	var newPizza = new Pizza (size, toppings);
	console.log(newPizza)
	this.pizzaOrders.push(newPizza);
}

//BL : Pizza Logic
function Pizza(size, toppings) {
	this.size = size,
		this.toppings = toppings
	this.cost = cost = []
}
//BL : Cost
Pizza.prototype.calcTotalCost = function (size) {
	var calcPizzaCost = this.size * (2) + this.toppings[0]
	this.cost.push(parseInt(calcPizzaCost));
}
// User Interface Logic

var order = new Order();
function displayToppingList(pizza){
	var htmlForToppinfList = "";
		pizza.forEach(function(topping))
}

function createNewPizza(size, toppings){
	order.getPizza(size, toppings);
	order.pizzas[0].calcTotalCost(order.pizzas[0].size);

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
