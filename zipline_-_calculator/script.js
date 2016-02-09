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
        var val = this.id, dispVal;
        
        if ($.isNumeric(+val)){
            dispVal = $("#exprDisplay").data("num") || "";
            dispVal += val;
            $("#exprDisplay").data("num", dispVal);
            console.log("The stored value is " + $("#exprDisplay").data("num"));
        } else {
            dispVal = $("#exprDisplay").data("num");
            calc.expr = calc.buildExpr(dispVal, calc.expr);
            $("#exprDisplay").data("num", "");
        
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
                    break;
            }
            calc.expr = calc.buildExpr(dispVal, calc.expr);
        }
        
        $("#exprDisplay").text(dispVal);
    },
    buildExpr: function(val, arr){
        if (arr.length > 0 
            && arr[arr.length-1] === "eq" 
            && $.isNumeric(val)){
                arr.length = 0;
        }
        
        // Symbol replacement
        // If user enters more than one non-numeric symbol in
        // a row, then the new symbol replaces the old one
        // e.g. 2 + * 3 = 2 * 3
        if (!$.isNumeric(val)
            && !$.isNumeric(arr[arr.length-1])){
            arr.pop();
        }
        arr.push.call(arr, val);
        return arr;
    },
    evalExpr: function(expr){
        var answer, i, val;
        
        console.log(expr);
        for (i = 0; i < expr.length; i++){
            val = expr[i];
            if (val === "x" || val === "/"){
                switch (val){
                    case "x":
                        answer = calc.multiply(+expr[i-1], +expr[i+1]);
                        expr.splice(i-1, 3, answer);
                        i -= 2;
                        console.log("expr is " + expr);
                        break;
                    case "/":
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
            if (val === "+" || val === "-"){
                switch (val){
                    case "+":
                        answer = calc.add(+expr[i-1], +expr[i+1]);
                        expr.splice(i-1, 3, answer);
                        i -= 2;
                        console.log("expr is " + expr);
                        break;
                    case "-":
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
