import * as L from 'leaflet';
import { Apple } from './apple';
import { AppleService } from './apple.service';

var appleIcon = L.icon({
    iconUrl: '../assets/apple-alt-solid.svg',

    iconSize: [20,20]
});

var AppleMarker = L.Marker.extend({

    options: {
        icon: appleIcon
    },

    apple: {},

    setApple: function(apple: AppleService) {
        this.apple = apple;
    },

    getApple: function(): AppleService {
        return this.apple;
    }

});

export function appleMarker(latlng: L.latLng, apple: AppleService, options) {
    var am = new AppleMarker(latlng, options);
    am.setApple(apple);

    return am;
}