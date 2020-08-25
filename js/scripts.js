function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function() {
  if (this.age <= 12) {
    return parseFloat(this.movie) * parseInt(this.time) / 2;
  } else if (this.age > 12 && this.age < 65) {
    return parseFloat(this.movie) * parseInt(this.time) * 5 / 4;
  } else {
    return parseFloat(this.movie) * parseInt(this.time) * 3 / 4; 
  }
}

function displayPriceDetails(ticket) {
  $("#output").show();
  let temp = ticket.price();
  $(".price").text(ticket.price());
}

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const inputMovie = $("select#movie").val();
    const inputTime = $("select#time").val();
    const inputAge = $("input#age").val();

    $("select#movie").val("");
    $("select#time").val("");
    $("input#age").val("");

    let newTicket = new Ticket(inputMovie, inputTime, inputAge);

    displayPriceDetails(newTicket);
  });
});