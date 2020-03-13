import * as L from 'leaflet';
import { Apple } from './apple';


var appleIcon = L.icon({
    iconUrl: '../assets/apple-alt-solid.svg',

    iconSize: [20,20]
});

var AppleMarker = L.Marker.extend({

    options: {
        icon: appleIcon
    },

    apple: {},

    setApple: function(apple: Apple) {
        this.apple = apple;
    },

    getApple: function(): Apple {
        return this.apple;
    }

});

export function appleMarker(latlng: L.latLng, apple: Apple, options) {
    var am = new AppleMarker(latlng, options);
    am.setApple(apple);

    return am;
}