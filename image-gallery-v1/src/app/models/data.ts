export class Data{
flickr_farm:any ;
flickr_server:any ; 
_id:any ;
flickr_secret : any  ;
public Data(flickr_farm:any , flickr_secret:any,flickr_server:any,_id:any){
    this._id=_id ; 
    this.flickr_farm=flickr_farm;
    this.flickr_secret=flickr_secret ; 
    this.flickr_server=flickr_server; 
}
}