var calculatorModule = (function() {
  var memory = "";
  var total = "";
  var operator = "";

  var isValid = function(num){
    if (typeof num === 'number'){
      return true;
    } else {
      return false;
    }
  }

  return {
    load : function(num) {
      total += num;
    },
    add: function(num){
      total = memory + num;
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
    recallMemory: function(){
      return memory;
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
    } else if (value === "="){
      if (myCalc.recallOperator() === "+"){
        myCalc.add(parseFloat(myCalc.getTotal()));
      }
      myCalc.saveMemory();
    } else {
      myCalc.load(value);
      firstClick = true;
    }
    $(".output").text(myCalc.getTotal());
  })
});

