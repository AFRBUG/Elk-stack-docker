import { Component, OnInit } from '@angular/core';
import { FlickerResponse } from '../models/flickerresponse';
import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  searchKeys:any ; 
  flickerResponse: FlickerResponse;
   UrlsList=new Array();

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    this.flickrService.getPhotos().subscribe( response => {
      this.flickerResponse = response;
    }, error => {
      console.log(error);
    });
  }
  onSearch(){
    
   this.flickrService.getPhtotosByKeys(this.searchKeys).subscribe((out:any)=>{
         this.UrlsList=[];
        out.hits.hits.forEach(element => {
          console.log(element);
          this.UrlsList.push("http://farm"+element._source.flickr_farm+".staticflickr.com/"
          +element._source.flickr_server+"/"+element._source.id+"_"+element._source.flickr_secret+".jpg")
        })
        
        console.log(this.UrlsList.length)
    
    

    })

  

  }
  testFunction( data:any){
      if(data.length!==0){
        return true;
      }
      return false


  }
  
}
