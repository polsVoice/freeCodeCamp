var pd = {
    startSec: "00",
    startMin: "25",
    get seconds() {return Math.floor((this.seconds/1000)%60);},
    get start() {return this.startMin + ":" + this.startSec;},
    time: function(){
    },
    init: function(){
        var timer = document.getElementById("timer");
        var foo = "bar";
        timer.addEventListener("click", pd.time, false);
        timer.textContent = pd.start;
        setInterval(function(){
            console.log("YO");
        }, 1000);
    }
};
pd.init();
