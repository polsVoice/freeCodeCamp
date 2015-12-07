var gen = {
    regex: /\n\./,
    file: "quotes.txt",
    getQuotes: function(file, callback, regex){
        $.ajax({
            type: "GET",
            url: file,
            success: function(data){
                var response = data.split(regex);
                callback.call(this, response);
            },
            fail: function(xhr, stat, err){
                console.log(err);
            }
        });
    },
    randomNumber: function(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    },
    returnRandomElm: function(arr){
        var randNum = gen.randomNumber(0, arr.length-1);
        return arr[randNum];
    },
    init: function(){
        $("#theButton").on("click", function(){
            gen.getQuotes(gen.file, function(data){
                var randQuote = gen.returnRandomElm(data);
                $("#quote").text(randQuote);
            }, gen.regex);
        });
    }
};
gen.init();
