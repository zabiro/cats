import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatsInformation } from '../interface/cat-interface';

const base_api_rul = 'https://api.thecatapi.com/v1'
const api_url = 'breeds'


@Injectable({
  providedIn: 'root'
})


export class CatsApiService {

 
  constructor(
    public httpClient: HttpClient,
    ) { }
    
    getCatIndormation(): any {
      const headers = new HttpHeaders({
        'x-api-key': 'bda53789-d59e-46cd-9bc4-2936630fde39'
      });
  
       return this.httpClient.get<CatsInformation>(
         `${base_api_rul}/${api_url}`, { headers: headers }
       );
     }
}


