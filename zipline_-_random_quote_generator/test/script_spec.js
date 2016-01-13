describe("Reading infile", function(){
    it("returns file contents as an array", function(done){
        gen.getQuotes("quotes.txt", function(data){
            
            // This is how Jasmine tests for type.
            // Use toEqual() only; toBe() does not work
            expect(data).toEqual(jasmine.any(Array));
            done();
        }, gen.regex);
    });
});
describe("Random number", function(){
    it("returns a number", function(){
        expect(gen.randomNumber(0, 12)).toEqual(jasmine.any(Number));
    });
});
describe("Random quote", function(){
    var arr = [ "Laugh and the world laughs with you, snore and you \
        sleep alone. -- Anthony Burgess",
        "A successful man is one who makes more money than his\
         wife can spend. A successful woman is one who can\
         find such a man. -- Lana Turner",
        "Roses are red, violets are blue, I'm schizophrenic,\
         and so am I.\
         -- Oscar Levant"
    ];
    it("returns a random quote", function(done){
        expect(gen.returnRandomElm(arr)).toEqual(jasmine.any(String));
        done();
    });
});
describe("Formatted quote", function(){
    it("removes line breaks", function(){
        expect(gen.formatQuote(".\nC++ tries to guard against Murphy, not Machiavelli.\n -- Damian Conway", /[\.\n]*--/))
            .toEqual("C++ tries to guard against Murphy, not Machiavelli. --- Damian Conway");
    });
});
