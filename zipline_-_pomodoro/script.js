var pd = {
    seconds: "00",
    minutes: "25",
    //start: (minutes + ":" + seconds),
    foo: "yo",
    time: function(){
    },
    init: function(){
        var timer = document.getElementById("timer");
        var foo = "bar";
        timer.addEventListener("click", pd.time, false);
        timer.textContent = this.minutes + ":" + this.seconds;
        console.log(pd.start);
        console.log(pd.seconds);
        console.log(pd.foo);
        console.log(foo);
    }
};
pd.init();
