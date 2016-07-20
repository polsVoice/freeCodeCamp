describe("Geolocator", function(){
    it("can find your ZIP code", function(done){
       weather.getLocation( function( data ){
           expect( data.zip ).toBe( "98105" );
           done();
       } );
    } );
} );
