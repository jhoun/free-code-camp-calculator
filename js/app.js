$(document).ready(function() {
  $(".btn").click(function(e) {

    var value = e.currentTarget.innerHTML;
    var myCalc = calculatorModule;
    var firstClick = "";
    var operators = ["+", "-", "x", "÷"];

    //Checks if number, operator, or equal is clicked
    if (operators.indexOf(value) > -1){
      myCalc.saveMemory()
      myCalc.saveOperator(value);
      myCalc.clearTotal();
      firstClick = true;
    } else if (value === "="){
      switch (myCalc.recallOperator()){
        case "+":
          myCalc.add(parseFloat(myCalc.getTotal()));
          break;
        case "-":
          myCalc.subtract(parseFloat(myCalc.getTotal()));
          break;
        case "x":
          myCalc.multiply(parseFloat(myCalc.getTotal()));
          break;
        case "÷":
          myCalc.divide(parseFloat(myCalc.getTotal()));
          break;
      }
      myCalc.saveMemory();
    } else {
      myCalc.load(value);
      firstClick = false;
    }

    // clears previous input
    if (value === "CE"){
      myCalc.clearTotal();
    }

    // clears everything
    if (value === "AC"){
      myCalc.clearTotal();
      myCalc.clearMemory();
    }

    // Helps show correct number(s) in ouput screen
    if (firstClick){
      $(".output").text(myCalc.getMemory());
    } else {
      $(".output").text(myCalc.getTotal());
    }
  })
});

