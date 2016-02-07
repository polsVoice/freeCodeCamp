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
            case "eq":
                dispVal = calc.evalExpr(calc.expr);
                break;
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
            default:
                dispVal = this.id;
                break;
        }
        calc.buildExpr(this.id, calc.expr);
        $("#exprDisplay").text(dispVal);
    },
    buildExpr: function(val, arr){
        if (arr.length > 0 
            && arr[arr.length-1] === "eq" 
            && $.isNumeric(val)){
                arr.length = 0;
        }
        arr.push.call(arr, val);
    },
    evalExpr: function(expr){
        var answer;
        switch(expr[1]){
            case "plus":
                answer = calc.add(+expr[0], +expr[2]);
                expr.length = 0;
                return answer;
                break;
            case "min":
                expr = calc.subtract(+expr[0], +expr[2]);
                return expr;
                break;
            case "mult":
                expr = calc.multiply(+expr[0], +expr[2]);
                return expr;
                break;
            case "div":
                expr = calc.divide(+expr[0], +expr[2]);
                return expr;
                break;
        }
    },
    init: function(){
        $("td").not("#exprDisplay").click(calc.display);
    }
};
calc.init();
