// To-do
// * Implement negative numbers
// * Fix multiple symbol input (e.g -+, +*)
// * strToNum

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
                calc.clearExpr();
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
        var answer, modExpr = [], i, val;
        
        console.log(expr);
        for (i = 0; i < expr.length; i++){
            val = expr[i];
            if (val === "mult" || val === "div"){
                switch (val){
                    case "mult":
                        answer = calc.multiply(+expr[i-1], +expr[i+1]);
                        expr.splice(i-1, 3, answer);
                        i -= 2;
                        console.log("expr is " + expr);
                        break;
                    case "div":
                        answer = calc.divide(+expr[i-1], +expr[i+1]);
                        expr.splice(i-1, 3, answer);
                        i -= 2;
                        console.log("expr is " + expr);
                        break;
                }
            }
        }

        for (i = 0; i < expr.length; i++){
            val = expr[i];
            if (val === "plus" || val === "min"){
                switch (val){
                    case "plus":
                        answer = calc.add(+expr[i-1], +expr[i+1]);
                        expr.splice(i-1, 3, answer);
                        i -= 2;
                        console.log("expr is " + expr);
                        break;
                    case "min":
                        answer = calc.subtract(+expr[i-1], +expr[i+1]);
                        expr.splice(i-1, 3, answer);
                        i -= 2;
                        console.log("expr is " + expr);
                        break;
                }
            }
        }
        return expr[0];
    },
    clearDisplay: function(){
        $("#exprDisplay").text("");
        calc.clearExpr();
    },
    clearExpr: function(){
        calc.expr.length = 0;
    },
    init: function(){
        $("td").not("#exprDisplay").click(calc.display);
        $("#clear").click(calc.clearDisplay);
    }
};
calc.init();
