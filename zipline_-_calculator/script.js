var calc = {
    val: "",
    expr: [],
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
        return +(a / b).toFixed(6);
    },
    display: function(){
        $("#exprDisplay").text(this.id);
        return calc.buildExpr(this.id);
    },
    buildExpr: function(val){
        calc.expr.push(val);
        return calc.expr;
    },
    init: function(){
        $("td").click(calc.display);
    }
};
calc.init();
