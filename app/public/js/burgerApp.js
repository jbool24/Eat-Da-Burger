$(document).ready(function() {
    console.log("app client loaded");

    var baseUrl = window.location.origin;
    var url = `${baseUrl}/api/burgers/devoured`;

    $.get(url, null, (burgers) => {
        var ul = $(".burgers-eaten");
        burgers.forEach((burger) => {
            var eaten = $(`<li><i class='fa fa-trash'> ${burger.burger_name}</i></li>`);
            ul.append(eaten);
        });
    });

    $(".order-window").on('click', "button", () => {
        var burgerID = $(this.activeElement).attr('data-id');
        console.log(burgerID);
        $.post(`${baseUrl}/api/burger/${burgerID}?_method=PUT`).done((response) => {
          console.log(response);
          refreshOrders()
        })
    });

    function submitOrder(event) {
        event.preventDefault();
        console.log('clicked order');
    }

    function refreshOrders(){
      $.get(`${baseUrl}/api/burgers`).done((response)=>{
        var orders = $(".burger-list")
        orders.empty();
        response.forEach((burger)=>{
          var list = $("<ul>");
          var eatBtn =$("<button>");
          eatBtn.attr('data-id', burger.id);

          list.append(`<li>${burger.burger_name}${eatBtn}<li>`)
        });

      })
    }
});
