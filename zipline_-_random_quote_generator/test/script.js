var gen = {
    getQuotes: function( file, callback ){
        //~ return $.get( file, function( data ){
            //~ var quotes = data.split( /\n\./ );
            //~ return quotes;
        //~ } );
        $.ajax({
            type: "GET",
            url: file,
            success: function(data){
                var response = data.split( /\n\./ );
                //~ console.log(response);
                callback.call(this, response);
            }
        });
    },
    init: function(){
    }
};
gen.init();
