import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Companyregistration } from '../models/companyregistration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router,private http:HttpClient) { }

  login(username:string,password:string){
 
    const signup :  Companyregistration[]=[]
  
    console.log('loginss'+username)
  const body = new HttpParams()
  .set('grant_type','password')
   .set('client_id','mod-c-company')
   .set('client_secret','fDhXUuIiTy2CXL399Rxbk2ukRLMWNwFI')
   .set('username',username)
   .set('password',password);
  
    const httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/x-www-form-urlencoded' // 👈
      })
    };
  
  

      return this.http.post('http://192.168.1.87:8080/realms/mode-c/protocol/openid-connect/token',body,httpOptions);
  //  return this.http.post(" http://localhost:3000/signup",)
  
  
  }
  
}
