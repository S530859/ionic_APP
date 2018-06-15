import { Http } from '@angular/http'; 
import { url } from '../config/config';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
user = {}
constructor(private http: Http){}

gethttpService(getAction: string){
    return this.http.get(url+getAction);
}
posthttpService(postAction: string,postbody: Object){
    return this.http.post(url+postAction,postbody,{});
}

putUser(user){
 this.user = user;
}
getUser(){
   return this.user;
}

}