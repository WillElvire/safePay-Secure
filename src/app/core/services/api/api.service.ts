import { HttpHeader } from './header.builder';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn : 'root'
})
export class HttpService {

  apiType : string = "crypto";

  constructor(private http : HttpClient) {

  }

  setApiType(apiType : string){
   this.apiType = apiType;
  }

  get<T>(endpoint : string ) {
    return this.http.get<T>(`${ this.apiType == "rest" ?  environment.BASE_URL : environment.CONIAPIBASE_URL}${endpoint}`,{headers : this.httpHeader()});
  }

  post(parameter : Required<{endpoint : string , data : any}> ) {
    return this.http.post(`${this.apiType == "rest" ?  environment.BASE_URL : environment.CONIAPIBASE_URL}${parameter.endpoint}`,parameter.data, {headers : this.httpHeader()} );
  }

  put(parameter : Required<{endpoint : string , data : any}>) {
    return this.http.put(`${this.apiType == "rest" ?  environment.BASE_URL : environment.CONIAPIBASE_URL}${parameter.endpoint}`, parameter.data,{headers : this.httpHeader()});
  }

  delete(endpoint : string) {
    return this.http.delete(`${this.apiType == "rest" ?  environment.BASE_URL : environment.CONIAPIBASE_URL}${endpoint}`,{headers : this.httpHeader()});
  }


  httpHeader() {
    return  new HttpHeader()
    .addHeader({key : "X-CoinAPI-Key",value :environment.COINAPIKEY})
    .build();
   ;
  }



  /*request(request : IHttpData) {
    if(request.request == EHttpRequest.POST) {
    }
  } */
}
