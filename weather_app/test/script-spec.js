describe("Geolocator", function(){
    it("can find your IP", function(done){
        weather.getLocation( function( data ){
            expect( data.ip ).toBe( "73.97.174.175" )
            done();
        } );
    });
});
