describe("It can parse time", function(){
    it("05:35", function(){
        expect(pd.setTime("05", "35")).toBe("05:35");
    });
});
describe("It can show the time", function(){
    it("23:32", function(){
        pd.updateClock.call($("#timer"), "23", "32");
        expect($("#timer").text()).toBe("23:32");
    });
});
