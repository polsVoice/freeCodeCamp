describe("Geolocator", function(){
    it("can find your longitude and latitude", function(done){
      weather.getLocation(function(data){
        expect(data).toBe('47.6691231, -122.3822538');
        done();
      });
    });
});
