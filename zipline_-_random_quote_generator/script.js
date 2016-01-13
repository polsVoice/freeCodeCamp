/* Twitter asynchronous loading */

(function(){
    window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };
     
      return t;
    }(document, "script", "twitter-wjs"));
})();


var gen = {
    regex: /\n\./,
    file: "https://s3-us-west-2.amazonaws.com/randquotes/quotes.txt",
    getQuotes: function(file, callback, regex){
        $.ajax({
            type: "GET",
            url: file,
            contentType: "text/plain",
            xhrFields: {
                withCredentials: false
            },
            headers: {},
            success: function(data){
                console.log( "file retrieved" );
                var response = data.split(regex);
                callback.call(this, response);
            },
            error: function(xhr, stat, err){
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
    formatQuote: function(str, regex){
        var quoteArr = str.split(regex),
            fQuote;
        
        // If it's attributed, format the attribution;
        // if not, leave it blank
        console.log("quoteArr[0] is " + quoteArr[0] + "and quoteArr[1] is " + quoteArr[1]);
        quoteArr[1] = quoteArr[1] ? " --- " + quoteArr[1] : "";
        fQuote = '"' + quoteArr[0] + '"' + quoteArr[1];
        fQuote = fQuote.replace(/\r?\n|\r/g, "");
        console.log(fQuote);
        return fQuote;
    },
    init: function(){
        $("#theButton").on("click", function(){
            gen.getQuotes(gen.file, function(data){
                var randQuote = gen.returnRandomElm(data),
                    formattedQuote;
                formattedQuote = gen.formatQuote(randQuote, /[\.\n]*--/);
                $("#quote").html(formattedQuote);
                if($("#container iframe")){
                    $("#container iframe").remove();
                }
                twttr.widgets.createShareButton(
                    window.location,
                    document.getElementById('container'),
                    {text: formattedQuote})
                .then(function(){
                    console.log("Button added");
                });
            }, gen.regex);
        });
    }
};
gen.init();
