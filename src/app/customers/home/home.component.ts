import { Component, OnInit, ElementRef, NgZone, ViewChild} from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
//import { DataService } from '../../services/data.service';
//import { Http } from '@angular/http';
import { HttpClient, HttpParams , HttpHeaders } from '@angular/common/http';
import { Post } from '../../services/post';
import { Observable } from 'rxjs/Observable';

//test begin




//test end

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Observable<any>;
  newPost: Observable<any>;
  readonly  Rootkk = 'https://jsonplaceholder.typicode.com';

  //test here
  lat: number;
  lng: number;
  zoom: number;

  //begin here
  constructor(private http:HttpClient,private mapsAPILoader: MapsAPILoader,
  private ngZone: NgZone) { }


  @ViewChild("search")
  public searchElementRef: ElementRef;

  ngOnInit() {
    //console.log(this.dataSrv.urlget('localhost'));

    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"],
      });


    // Bias the SearchBox results towards current map's viewport.
  autocomplete.addListener('bounds_changed', function() {
    this.searchElementRef.nativeElement.setBounds(autocomplete.getBounds());
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
           this.zoom = 17;
        });
      });

    });


  }


  private setCurrentPosition() {
    /// set user's location
    if ("geolocation" in navigator) {
   navigator.geolocation.getCurrentPosition((position) => {
     this.lat = position.coords.latitude;
     this.lng = position.coords.longitude;
     this.zoom = 12;
   });
  }
  }
  
  getPost(uidt){
      console.log('test button clicked' + uidt);
      let params = new HttpParams().set('userId',uidt);
//      this.posts = this.http.get(this.Rootkk + '/posts',{params});
//      this.posts = this.http.get('http://192.168.1.1:3000/api/test');
      console.log(this.posts);
  }
  sendPost(){
      console.log('test button clicked');
       let headers = new HttpHeaders().set('Authorization','auth-token');
      this.posts = this.http.get(this.Rootkk + '/posts',{headers});
      console.log(this.posts);
  }
  createPost(){
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My sample new post',
      body: 'Hello World!!'
    }
    this.newPost = this.http.post(this.Rootkk + '/posts', data)
    //.map(post => post.title)

/*
    this.newPost = this.http.post(this.Rootkk + '/nourltest', data)
    .retry(3)
    .catch(err => {
      console.log(err)
      return Observable.of(err)
    })
    */
  }

}
