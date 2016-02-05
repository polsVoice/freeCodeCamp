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
        var dispVal;
        switch (this.id){
            case "plus":
                dispVal = "+";
                break;
            case "min":
                dispVal = "-";
                break;
            case "mult":
                dispVal = "x";
                break;
            case "div":
                dispVal = "/";
                break;
        }
        $("#exprDisplay").text(dispVal);
        //calc.buildExpr(this.id);
    },
    buildExpr: function(val){
        if (val === "="){
            calc.evalExpr(calc.expr);
        }
        calc.expr.push(val);
    },
    evalExpr: function(expr){
        calc.expr.forEach(function(val, idx){
            console.log("The " + idx + " value in the array is " + val);
        });
    },
    init: function(){
        $("td").click(calc.display);
    }
};
calc.init();
