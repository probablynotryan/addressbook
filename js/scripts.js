$(document).ready(function() {
  // event.preventDefault();
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const name = $("input#inputName").val();
    const address = $("input#inputAddress").val();
    const city = $("input#inputCity").val();
    const zipcode = $("input#inputZipCode").val();
    const state = $("input#inputState").val();
    const country = $("#country").val();

    const wholeAddress = (name + " " + address + " " + city + " " + state + " " + zipcode + " " + country);

    $("ul#addedAddresses").append("<li> " + wholeAddress);
    $

    // $("ul#addedAddresses").append(name);

    // $("ul#addedAddresses").append(address);

    // $("ul#addedAddresses").append(city);

    // $("ul#addedAddresses").append(zipcode);

    // $("ul#addedAddresses").append(state);

  });
});

    // $("ul#user").prepend("<li>Hello!</li>");
    // $("ul#webpage").prepend("<li>Why hello there!</li>");
    // $("ul#user").children("li").first().click(function() {
    //   $(this).remove();
    // });
    // $("ul#webpage").children("li").first().click(function() {
    //   $(this).remove();
