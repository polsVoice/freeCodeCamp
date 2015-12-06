describe("Reading infile", function(){
    it("returns file contents as an array", function(done){
        var quoteArray = [];
        gen.getQuotes("quotes.txt", function(data){
            expect(data).toEqual(jasmine.any(Array));
        });
    });
});
