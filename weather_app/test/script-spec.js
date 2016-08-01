describe("Geolocator", function(){
    it("can find your ZIP code", function(done){
       weather.getLocation( function( data ){
           expect( data.zip ).toBe( "98105" );
           done();
       } );
    } );
    it( "can find your city", function( done ){
        weather.getLocation( function( data ){
            expect( data.city ).toBe( "Seattle" );
            done();
        } );
    } );
} );
describe( "Weather", function(){
    it( "can retrieve the weather", function( done ){
        weather.getWeather( function( data ){
            expect( data.weather ).toEqual( [{"id":701,"main":"Mist","description":"mist","icon":"50d"}] );
            done();
        } );
    } );
} );
