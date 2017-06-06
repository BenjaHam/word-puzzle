$(document).ready(function(event) {
  $("#submitButton").click(function() {
    var submitText = $("#textPrompt").val();
    var newText = "";

      for (var idx = 0; idx < submitText.length; idx += 1) {
        // alert(submitText[idx]);
        if (submitText[idx] === "a" || submitText[idx] === "e" || submitText[idx] === "i" || submitText[idx] === "o" || submitText[idx] === "u") {
          console.log(idx);
          newText = newText + "-";
          console.log(newText);
        } else {
          console.log(idx);
          newText = newText + submitText[idx];
          console.log(newText);
        };
      };
    alert("You've successfully submitted!");
    // $("#result").append("<p>" + newText + "</p>");
  });


  event.preventDefault;
});
