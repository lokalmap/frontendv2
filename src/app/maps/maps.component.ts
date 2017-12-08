import { Component, OnInit,ElementRef, NgZone, ViewChild} from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
    public searchControl: FormControl;

    lat: number;
    lng: number;
    zoom: number;
    @ViewChild("search")
    public searchElementRef: ElementRef;
    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    }
    //
    private setCurrentPosition() {
         /// set user's location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.zoom = 20;
          });
        }
    }
    ngOnInit() {

      this.searchControl = new FormControl();
      this.setCurrentPosition(); //set current position
      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            //set latitude, longitude and zoom
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
          });
        });
      });

    }
}