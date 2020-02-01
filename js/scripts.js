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
	this.toppings = [],
		this.toppings.push(toppings);
	this.cost = cost = []
}
//BL : Cost Calculation 
Pizza.prototype.calcTotalCost = function () {
	var calcPizzaCost = this.size * (2) + this.toppings[0].length
	this.cost.push(parseInt(calcPizzaCost));
	console.log(calcPizzaCost);
}
// User Interface Logic

var order = new Order();
//Loop to Display Toppings List
function displayToppingList(pizza){
	var htmlForToppingList = "";
		pizza.forEach(function(topping) {
			htmlForToppingList += "<li>" + topping + "</li>"
		});
		$("#show-pizza-topping").html(htmlForToppingList);
}
// Collecting Order Information 
function createNewPizza(size, toppings){
	order.getPizza(size, toppings);
	order.pizzaOrders[0].calcTotalCost(order.pizzaOrders[0].size);

		$("#show-pizza-size").html(order.pizzaOrders[0].size);
		$("#total-cost").html(order.pizzaOrders[0].cost);
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
		displayToppingList(order.pizzaOrders[0].toppings[0]);
		$()
		$(".whole-form").hide();
		$(".show-order").show();
	});
});
