import { faker } from "@faker-js/faker";
import { Mappable } from "./customMap";


export class Company implements Mappable{
    companyName: string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
    }
    constructor(){
        this.companyName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat:parseInt(faker.address.latitude()),
            lng:parseInt(faker.address.longitude())
        }
    }
    markerContent():string {
        return `companyName is  : ${this.companyName}`
    }
}