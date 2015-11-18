var gen = {
    getQuotes: function( file ){
        $.get( file, function( data ){
            var quotes = data.split( /\n\./ );
            console.log( quotes );
            return quotes;
        } );
    },
    init: function(){
    }
};
gen.init();
