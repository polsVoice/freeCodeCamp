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
        running = false,
        timer = $("#timer");
    
    function stopClock(){
    }
    function initClock(){
        $("#timer").text(setTime(startMin, startSec));
    }
    function startClock(){
        setInterval(function(){
            startSec--;            
            if (startSec === "00"){
                setTimeout(function(){
                    startSec = "59";
                    $("#timer").text(setTime(startMin, startSec));
                }, 1000);
            }
            $("#timer").text(setTime(startMin, startSec));
        }, 1000);
    }
    function stopClock(){
    }
    return {
        setTime: function(min, sec){
            return min + ":" + sec;
        },
        decrementTime: function(mins, secs){
            if (secs === "00"){
                setTimeout(function(){
                    secs = "59";
                }, 1000);
                mins--;
                return setTime(mins, secs);
            }
            secs--;
            return setTime(mins, secs);
        },
        runClock: function(){
            setInterval(this.decrementTime(startMin, startSec), 1000);
        },
        updateClock: function(str){
            $(this).text(str);
        },
        init: function(){
<<<<<<< HEAD
            
            // use call() to make "this" the #timer object
            this.updateClock.call(timer, this.setTime(startMin, startSec));
            $("#clock").toggleFunc(this.runClock(startMin, startSec), function(){
                console.log("Volgein");
            });
=======
            initClock();
            $("#clock").toggleFunc(startClock, stopClock);
>>>>>>> a503d4d0aac79f90e0e3111a150b2c665ac73648
        }
    }
}();
pd.init();
