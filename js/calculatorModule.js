var calculatorModule = (function() {
  // Private Variables
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