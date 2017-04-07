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
describe( "Weather display", function(){
    it( "can display a weather string", function(){
        var element = weather.display( 'icy' );
        expect( element.innerHTML ).toBe( 'icy' );
    } );
    it( "can display weather from JSON", function(done){
        weather.getWeather( function( json ){
            var element = weather.display( json.weather[ 0 ].main );
            expect( element.innerHTML ).toBe( 'Rain' );
            done();
        } );
    } );
} );
