var calculatorModule = (function() {
  var memory = "";
  var total = "";
  var operator = "";

  return {
    load : function(num) {
      total += num;
    },
    add: function(num){
      total = memory + num;
    },
    subtract: function(num){
      total = memory - num;
    },
    multiply: function(num){
      total = memory * num;
    },
    divide: function(num){
      total = memory/num;
    },
    saveOperator: function(val){
      operator = val;
    },
    recallOperator: function(val){
      return operator;
    },
    getTotal: function(){
      return total;
    },
    clearTotal: function(){
      total = "";
    },
    saveMemory: function(){
      memory = parseFloat(total);
    },
    getMemory: function(){
      return memory;
    },
    clearMemory: function(){
      memory = "";
    }
  };
}());

$(document).ready(function() {
  $(".btn").click(function(e) {
    var value = e.currentTarget.innerHTML;
    var firstClick = "";
    var myCalc = calculatorModule;
    var operators = ["+", "-", "x", "÷"];
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

    if (value === "CE"){
      myCalc.clearTotal();
    }

    if (value === "AC"){
      myCalc.clearTotal();
      myCalc.clearMemory();
    }
    if (firstClick){
      $(".output").text(myCalc.getMemory());
    } else {
      $(".output").text(myCalc.getTotal());
    }
  })
});

