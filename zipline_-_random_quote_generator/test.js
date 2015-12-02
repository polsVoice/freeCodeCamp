( function(){
	this.assert = function( value, desc ){
		var li = document.createElement( "li" );
		var results = document.getElementById( "results" );
		li.className = value ? "pass" : "fail";
		li.appendChild( document.createTextNode( desc ) );
		results.appendChild( li );
		if ( !value ){
			li.parentNode.parentNode.className = "fail";
		}
		return li;
	};
} )();

var test = {
    init: function( obj ){
		var quotesArr = obj.getQuotes( "quotes.txt" );
        assert( obj.hasOwnProperty( "getQuotes" ),
            "getQuotes exists" );
        assert( quotesArr instanceof Array,
            "getQuotes returns an array" );
        console.log( typeof quotesArr );
	}
};
test.init( gen );
