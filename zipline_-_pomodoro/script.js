jQuery.fn.toggleFunc = function(func1, func2){
	return this.each(function(){
		$(this).click( function(){
			var counter = $(this).data("counter") || 1;
			switch(counter){
				case 1:
					func1();
					break;
				case 2:
					func2();
					break;
				default:
					break;
			}
			counter++;
			if (counter > 2){
				counter = 1;
			}
			$(this).data("counter", counter);
		});
	});
};
var pd = function(){
    var startSec = "00",
        startMin = "25",
        running = false;
        
    function setTime(min, sec){
        return min + ":" + sec;
    }
    function startClock(){
        $("#timer").text(setTime(startMin, startSec));
        var time = new Date();
        $("#timer").text(time.getTime());
    }
    return {
        updateClock: function(){
            $(this).text(setTime(startMin, startSec));
        },
        init: function(){
            startSec = 60;
            startClock();
            $("#clock").toggleFunc(startClock, function(){
                console.log("Volgein");
            });
        }
    }
}();
pd.init();
