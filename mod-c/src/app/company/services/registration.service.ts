import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import{companyRegistration};
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  registration(user:any){
    console.log(user);
    
  //  return this.http.post("http://192.168.1.87:8084/api/v1/company/create",user,
   return this.http.post("http://192.168.1.87:8084/api/v1/company/user/registration",user,
   {
    headers : {
      'Content-Type': 'application/json',
     
    },
    responseType: 'text'
   }
   );
  // return this.http.post(" http://localhost:3000/signup",user);
   
}
}
