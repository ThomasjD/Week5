//You are the owner of a coffee shop and you want to manage the orders you receive from the customers.

//Create an app which list all the coffee orders on a web page.

//You can also type in the email address in a text box and search for a particular coffee order by email address.

//You should also be able to delete the coffee order. You should also be able to add a new coffee order.

/*
*download in all orders //fetch()
  -store in in array or dictionary //append

*create search btn //
  -search by email //

*delete coffee order//
*add coffee order //
*/

//Get all orders:
var allOrder = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

//Create new order:
var createOrder = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
  //Params: emailAddress (string), coffee (string)

//Get order by email:
var getOrderThomas= "thomasdinh25@gmail.com"
var getOrder = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"+getOrderThomas


//Delete order by email:
var deleteOrderThomas = "thomasdinh25@gmail.com"
var deleteOrder = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/" + deleteOrderThomas


class CoffeeOrders {
  constructor(email, coffee) {
    this.emailAddress = email
    this.coffee = coffee
  }
}

var allCurrentOrders = []

var order = {
  coffee: 'espresso',
  emailAddress: 'thomasdinh25@gmail.com',
  quantity : 2
}

//(url, {method, headers}, body()).then().then()
fetch(createOrder, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'},
  body: JSON.stringify(order)

}).then(function(response) {
  //console.log(response)
  return response.json()

}).then(function(json){
  console.log(json)
})


fetch(getOrder, {
  method: 'GET',
  //headers: {
    //'Content-Type': 'application/json'},
  //body: JSON.stringify(order)

}).then(function(response) {
  //console.log(response)
  return response.json()

}).then(function(json){
  console.log(json)
})
/*
fetch(deleteOrder, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'},
  body: JSON.stringify(order)

}).then(function(response) {
  //console.log(response)
  return response.json()

}).then(function(json){
  //console.log(json)
})



fetch(allOrder)
.then(function(response){
    //console.log(response)
    return response.json()

    }).then(function(json){
      //console.log(json)
      //console.log(JSON.parse(json))

      for(emailAddress in json) {
        var user = json[emailAddress]

        //console.log(user)

        allCurrentOrders.push(user)

        //console.log(user)
      }
       console.log(allCurrentOrders)

        return allCurrentOrders
    })

*/







/*
let addAnOrder = function(email) {
  allCurrentOrders.push(email)
}

//use post
let deleteAnOrder = function(email) {

}


let checkAnOrder = function(email) {

}
*/


    /*
  }).then(function(allCurrentOrders) {
      console.log(allCurrentOrders)
    }) */
