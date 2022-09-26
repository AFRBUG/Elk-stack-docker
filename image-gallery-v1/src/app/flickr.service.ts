import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlickerResponse } from './models/flickerresponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from './models/data';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})



export class FlickrService {
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('elastic:supcom2022')
    })
  };

  flickerUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';

  constructor(private http: HttpClient) { }

  
 constractFlikrUrl(data:any ){
  let UrlsList=new Array();
  console.log(data)
  for(let i in data.length ){
    UrlsList.push("http://farm"+data[i].flickr_farm+".staticflickr.com/"
    +data[i].flickr_server+"/"+data[i]._id+"_"+data[i].flickr_secret+".jpg")

  }
  return UrlsList ; 
 }

  getPhotos(): Observable<FlickerResponse> {
    return this.http.get<FlickerResponse>(this.flickerUrl);
  }
  getPhtotosByKeys(keys:any):any{
    return this.http.get(environment.serverUrl+"?q="+keys,this.httpOptions);
  }
}
