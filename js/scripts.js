//BL : Order Logic
function Order() {
	this.pizzaOrders = [],
		this.currentId = 0
}

Order.prototype.getPizza = function (size, toppings) {
	var newPizza = new Pizza (size, toppings);
	this.pizzaOrders.push(newPizza);
}

//BL : Pizza Logic
function Pizza(size, toppings) {
	this.size = size,
		this.toppings = toppings
	this.cost = cost = []
}
//BL : Cost
Pizza.prototype.calcTotalCost = function () {
	var calcPizzaCost = this.size * (2) + this.toppings[0].length
	this.cost.push(parseInt(calcPizzaCost));
}
// User Interface Logic

var order = new Order();
function displayToppingList(pizza){
	var htmlForToppingList = "";
		pizza.forEach(function(topping) {
			htmlForToppingList += "<li>" + topping + "</li>"
		});
		$("#show-pizza-topping").html(htmlForToppingList);
}

function createNewPizza(size, toppings){
	order.getPizza(size, toppings);
	order.pizzas[0].calcTotalCost(order.pizzas[0].size);

}
$(document).ready(function () {
	var toppingInput = [];
	$("form#select-pizza-size-topping").submit(function () {
		event.preventDefault();
		var sizeInput = parseInt($("#pizza-size").val());
		
		$("input:checkbox[name=topping]:checked").each(function () {
			var pizzaToppingsChosen = $(this).val();
			toppingInput.push(pizzaToppingsChosen);
		});
		createNewPizza(sizeInput,toppingInput);
		displayToppingList(order.pizzas[0].toppings[0]);
	});
});
