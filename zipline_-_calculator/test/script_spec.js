describe("It can add", function(){
    it("2 + 2", function(){
        expect(calc.add(2, 2)).toBe(4);
    });
    it("12 + 2", function(){
        expect(calc.add(12, 2)).toBe(14);
    });
    it("7 + 6", function(){
        expect(calc.add(7, 6)).toBe(13);
    });
    it("-4 + 4", function(){
        expect(calc.add(-4, 4)).toBe(0);
    });
    it("-2 + -3", function(){
        expect(calc.add(-2, -3)).toBe(-5);
    });
});
describe("It can subtract", function(){
    it("4-4", function(){
        expect(calc.subtract(4, 4)).toBe(0);
    });
    it("1-2", function(){
        expect(calc.subtract(1, 2)).toBe(-1);
    });
    it("5-2", function(){
        expect(calc.subtract(5, 2)).toBe(3);
    });
    it("-1--8", function(){
        expect(calc.subtract(-1, -8)).toBe(7);
    });
});
describe("It can multiply", function(){
    it("2*3", function(){
        expect(calc.multiply(2, 3)).toBe(6);
    });
    it("-2*3", function(){
        expect(calc.multiply(-2, 3)).toBe(-6);
    });
    it("2*-3", function(){
        expect(calc.multiply(2, -3)).toBe(-6);
    });
    it("-2*-3", function(){
        expect(calc.multiply(-2, -3)).toBe(6);
    });
});
describe("It can divide", function(){
    it("6/3", function(){
        expect(calc.divide(6, 3)).toBe(2);
    });
    it("1/3", function(){
        expect(calc.divide(1, 3)).toBe(.333333);
    });
    it("-4/5", function(){
        expect(calc.divide(-4, 5)).toBe(-0.8);
    });
});
describe("It can display characters", function(){
    var plus = {id: "plus"};
    var minus = {id: "min"};
    var mult = {id: "mult"};
    var div = {id: "div"};
    var one = {id: "1"};
    var negFive = {id:"-5"};
    var dec = {id:"0.2"};
    
    it("plus", function(){
        calc.display.call(plus);
        expect($("#exprDisplay").text()).toBe("+");
    });
    it("minus", function(){
        calc.display.call(minus);
        expect($("#exprDisplay").text()).toBe("-");
    });
    it("multiply", function(){
        calc.display.call(mult);
        expect($("#exprDisplay").text()).toBe("x");
    });
    it("divide", function(){
        calc.display.call(div);
        expect($("#exprDisplay").text()).toBe("/");
    });
    it("1", function(){
        calc.display.call(one);
        expect($("#exprDisplay").text()).toBe("1");
    });
    it("-5", function(){
        calc.display.call(negFive);
        expect($("#exprDisplay").text()).toBe("-5");
    });
    it("0.2", function(){
        calc.display.call(dec);
        expect($("#exprDisplay").text()).toBe("0.2");
    });
});
describe("It can evaluate expressions", function(){
    it("5+6", function(){
        expect(calc.evalExpr(["5", "plus", "6"])).toBe(11);
    });
    it("-2+1", function(){
        expect(calc.evalExpr(["-2", "plus", "1"])).toBe(-1);
    });
    it("22*2", function(){
        expect(calc.evalExpr(["22", "mult", "2"])).toBe(44);
    });
    it("1/3", function(){
        expect(calc.evalExpr(["1", "div", "3"])).toBe(0.333333);
    });
    it("-22/6", function(){
        expect(calc.evalExpr(["-22", "div", "6"])).toBe(-3.666667);
    });
    it("-1--6", function(){
        expect(calc.evalExpr(["-1", "min", "-6"])).toBe(5);
    });
});
