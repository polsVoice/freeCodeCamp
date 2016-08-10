describe("Geolocator", function(){
    it("can find your ZIP code", function(done){
       weather.getLocation( function( data ){
           expect( data.zip ).toBe( "98117" );
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
    it( "can get weather", function( done ){
        weather.getWeather( function( data ){
            expect( data.weather[ 0 ].main ).toBe( "Clouds" );
            done();
        } );
    } );
} );
