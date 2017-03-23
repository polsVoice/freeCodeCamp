var weather = function(){
    "use strict";
    var key = config.MY_KEY;
    
    function display( element, str ){
        "use strict";
        var $element = $( "#" + element );
        $element.html( "<p>" + str + "</p>" );
    }
    
    function Weather( place, shortDesc, longDesc ){
        "use strict";
        this.place = place;
        this.shortDesc = shortDesc;
        this.longDesc = longDesc;
    }
    
    return {
        getLocation: function( callback ){
            "use strict";
            $.getJSON( "http://ip-api.com/json/", function( json ){
                callback( json );
            } );
        },
        getWeather: function( callback ){
            "use strict";
            var zip, country, uri;
            this.getLocation( function( data ){
                zip = data.zip;
                country = data.countryCode;
                $.getJSON( "http://api.openweathermap.org/data/2.5/weather?zip=" + zip
                    + "," + country + "&appid=" + key, function( json ){
                    callback( json );
                } );
            } );
        },
        init: function(){
            "use strict";
                        
            weather.getWeather( function( json ){
                var myWeather = new Weather( json.name
                    , json.weather[ 0 ].main
                    , json.weather[ 0 ].description );
                var $icon = $( "#icon" );
                for ( var key in myWeather ){
                    if ( myWeather.hasOwnProperty( key ) ){
                        display( key, myWeather[ key ] );
                    }
                }
            } );
        }
    }
}();
weather.init();
