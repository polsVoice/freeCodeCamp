var weather = function(){
    "use strict";
    var key = config.MY_KEY;
    
    function display( element, str ){
        "use strict";
        var $element = $( "#" + element );
        $element.html( "<p>" + str + "</p>" );
    }
    
    function Weather( place, shortDesc, longDesc, icon ){
        "use strict";
        this.place = place;
        this.shortDesc = shortDesc;
        this.longDesc = longDesc;
        this.icon = icon;
    }
    
    return {
        display: function( str ){
            "use strict";
            var weatherElm = document.createElement( "p" );
            var weatherTxt = document.createTextNode( str );
            weatherElm.id = 'weather';
            weatherElm.appendChild( weatherTxt );
            return weatherElm;
        },
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
                    , json.weather[ 0 ].description
                    , json.weather[ 0 ].icon );
                for ( var key in myWeather ){
                    if ( myWeather.hasOwnProperty( key ) ){
                        weather.display( myWeather[ key ] );
                    }
                }
            } );
        }
    }
}();
weather.init();
