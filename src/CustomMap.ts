export interface Mappable{
    location:{
        lat:number,
        lng:number
    };
    markerContent():string
}
export class CustomMap{
    private googleMap:google.maps.Map

    constructor(divId:string){
        this.googleMap = new google.maps.Map(document.getElementById(divId)!!,{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        });
    }
    addMarker(coords:Mappable):void{
        const marker = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:coords.location.lat,
                lng:coords.location.lng
            },

        })

        marker.addListener('click',function(){
            const infoWindow = new google.maps.InfoWindow({
                content:coords.markerContent()
            })
            infoWindow.open(this.googleMap,marker)
        })
    }
}