var gen = {
    regex: /\n\./,
    file: "quotes.txt",
    getQuotes: function(file, callback, regex){
        return $.ajax({
            type: "GET",
            url: file,
            success: function(data){
                var response = data.split(regex);
                callback.call(this, response);
            },
            fail: function(xhr, stat, err){
                console.log(err);
            }
        
        // getQuotes() must return a promise in order to
        // use $.when().done()
        }).promise();
    },
    randomNumber: function(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    },
    returnRandomElm: function(arr){
        var randNum = gen.randomNumber(0, arr.length-1);
        return arr[randNum];
    },
    init: function(){
    }
};
gen.init();
