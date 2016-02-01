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
describe("It displays the entered character", function(){
    xit("displays the value", function(){
        expect($("#exprDisplay").html()).toBe();
    });
});
