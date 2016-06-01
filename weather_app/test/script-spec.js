describe("Geolocator", function(){
    it("can find your IP", function(done){
      expect(weather.getIP()).toEqual("174.21.43.111");
      done();
    });
});
