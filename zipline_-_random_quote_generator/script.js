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
        $("#twitterButton").attr("data-text", "YOLO");
        $("#theButton").on("click", function(){
            gen.getQuotes(gen.file, function(data){
                var randQuote = gen.returnRandomElm(data),
                    formattedQuote;
                randQuote = randQuote.split( /[\.\n]*--/ );
                
                // If it's attributed, format the attribution;
                // if not, leave it blank
                randQuote[1] = randQuote[1] ? "&ndash; " + randQuote[1] : "";
                formattedQuote = "&ldquo;" + randQuote[0] + '&rdquo;<br/>' + randQuote[1];
                $("#quote").html(formattedQuote);
                twttr.widgets.createShareButton(
                    'https://dev.twitter.com/',
                    document.getElementById('container'),
                    {text: formattedQuote});
            }, gen.regex);
        });
    }
};
gen.init();
