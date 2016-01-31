var calc = {
    add: function( a, b ){
        return a + b;
    },
    subtract: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return +(a/b).toFixed(6);
    },
    init: function(){
        console.log("Loaded");
    }
};
calc.init();
