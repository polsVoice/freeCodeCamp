describe("Reading infile", function(){
    it("returns file contents as an array", function(done){
        gen.getQuotes("quotes.txt", function(data){
            expect(data).toEqual(jasmine.any(Array));
            done();
        });
    });
});
