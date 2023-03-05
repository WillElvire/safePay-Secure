import { HttpHeader } from './header.builder';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpService {

  apiType : string = "crypto";

  constructor(private http : HttpClient) {

  }

  setApiType(apiType : string){
   this.apiType = apiType;
  }

  get<T>(endpoint : string ) {
    return this.http.get<T>(`${this.getBaseUrl()}${endpoint}`,{headers : this.httpHeader()});
  }

  post<T>(parameter : Required<{endpoint : string , data : any}> ) {
    return this.http.post<T>(`${this.getBaseUrl()}${parameter.endpoint}`,parameter.data, {headers : this.httpHeader()} );
  }

  put<T>(parameter : Required<{endpoint : string , data : any}>) {
    return this.http.put<T>(`${this.getBaseUrl()}${parameter.endpoint}`, parameter.data,{headers : this.httpHeader()});
  }

  delete<T>(endpoint : string) {
    return this.http.delete<T>(`${this.getBaseUrl()}${endpoint}`,{headers : this.httpHeader()});
  }


  getBaseUrl() {
    switch(this.apiType) {
      case "rest" :
         return environment.BASE_URL;
      case "crypto" :
         return environment.CONIAPIBASE_URL;
      case "assets" :
        return "/assets/json/";
      default :
        return environment.BASE_URL;
    }
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
