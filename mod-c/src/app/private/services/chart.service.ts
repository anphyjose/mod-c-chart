import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// const apiKey = 'coinrankingc032026f93e3b94c047c89523ca837327c4dac81e1070686';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'X-My-Custom-Header': `${apiKey}`,
//     'Access-Control-Allow-Origin': '*',
//   }),
// }
@Injectable({
  providedIn: 'root'
})
export class ChartService {
  token:any = localStorage.getItem('token');
  // private baseUrl = 'https://api.coinranking.com/v2/coins';
  // private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient) { }

  // cryptoData() {
  //   const url = `${this.proxyUrl}${this.baseUrl}`;
  //   return this.http
  //     .get(url, httpOptions)
  //     .toPromise()
  //     .then((data) => {
  //       return data;
  //     });
  //     // return this.http.get('http://192.168.1.87:8085/api/v1/report/User-chart/load?fDate=2023-02-23&filterBy=WTD&tDate=2023-02-23',httpOptions)
  // }

  // chartUsers( ){
  //   console.log(this.token);
  //   // console.log('filessss'+ id);
  //   // console.log('hello'+  this.companyUserName);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //      'Content-Type': 'application/json',
  //      'Authorization': 'bearer ' + this.token
  //     })
  //   };
  //   // return this.http.get("http://localhost:3000/users")
  //    //return this.httpclient.get('http://192.168.1.87:8084/api/v1/company/user/find-user/'+this.companyUserName,httpOptions)
  //   //  return this.httpclient.get('http://192.168.1.87:8084/api/v1/company/user/find-user?id='+id,httpOptions)
  //   return this.http.get('http://192.168.1.87:8085/api/v1/report/User-chart/load?fDate=2023-02-27&filterBy=WTD&tDate=2023-03-03',httpOptions)
      
   
  // }
    
  getchartData(resultdate:any):Observable<any>
  {
    console.log(resultdate)
    const httpOptions = {
          headers: new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': 'bearer ' + this.token
          })
        };
    // const from ="2023-11-25";
    // return this.http.get('http://192.168.1.87:8083/api/v1/report/companyUser-chart/load?fDate=2023-02-02&filterBy==WTD&tDate=2023-03-04',
    return this.http.get('http://192.168.1.87:8083/api/v1/report/User-chart/load?fDate='+resultdate.fdate+'&filterBy='+resultdate.type+'&tDate='+resultdate.tdate,httpOptions)

   
  }
  // getLeadchartdata(resultdate:any){
  //   console.log(resultdate)
  // getLeadchartdata(){
   
  //   const httpOptions = {
  //         headers: new HttpHeaders({
  //          'Content-Type': 'application/json',
  //          'Authorization': 'bearer ' + this.token
  //         })
  //       };
  //   // const from ="2023-11-25";
  //   // return this.http.get('http://192.168.1.87:8083/api/v1/report/companyUser-chart/load?fDate=2023-02-02&filterBy==WTD&tDate=2023-03-04',
  //   return this.http.get('http://192.168.1.87:8083/api/v1/report/lead-chart/load?fDate=2023-03-07&filterBy=MTD&month=03&tDate=2023-03-07&year=2023',httpOptions)

  // }
  getLeadchartData1(resultdate:any):Observable<any>
  {
    console.log(resultdate)
    const httpOptions = {
          headers: new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': 'bearer ' + this.token
          })
        };
    // const from ="2023-11-25";
    // return this.http.get('http://192.168.1.87:8083/api/v1/report/companyUser-chart/load?fDate=2023-02-02&filterBy==WTD&tDate=2023-03-04',
    return this.http.get('http://192.168.1.87:8083/api/v1/report/User-chart/load?fDate='+resultdate.fdate+'&filterBy='+resultdate.type+'&month='+resultdate.month+'&tDate='+resultdate.tdate+'&year='+resultdate.year,httpOptions)

   
  }
  getleadchartData(resultdate:any):Observable<any>
  {
    console.log(resultdate);

    const httpOptions = {
          headers: new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': 'bearer ' + this.token
          })
        };
    // const from ="2023-11-25";
    // return this.http.get('http://192.168.1.87:8083/api/v1/report/companyUser-chart/load?fDate=2023-02-02&filterBy==WTD&tDate=2023-03-04',
    return this.http.get('http://192.168.1.87:8083/api/v1/report/lead-chart/load?fDate='+resultdate.fdate+'&filterBy=='+resultdate.type+'&month='+resultdate.month+'&tDate='+resultdate.tdate+'&year='+resultdate.year,httpOptions

 
      )
  }
  getInfluenceVisit(resultdate:any){
    console.log(resultdate);

    const httpOptions = {
          headers: new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': 'bearer ' + this.token
          })
        };
    // const from ="2023-11-25";
    // return this.http.get('http://192.168.1.87:8083/api/v1/report/companyUser-chart/load?fDate=2023-02-02&filterBy==WTD&tDate=2023-03-04',
    return this.http.get('http://192.168.1.87:8083/api/v1/report/influenceVisit-chart/load?fDate='+resultdate.fdate+'&filterBy=='+resultdate.type+'&month='+resultdate.month+'&tDate='+resultdate.tdate+'&year='+resultdate.year,httpOptions)
  }

  getLeadVolume(resultdate:any){
    console.log(resultdate);

    const httpOptions = {
          headers: new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': 'bearer ' + this.token
          })
        };
    // const from ="2023-11-25";
    // return this.http.get('http://192.168.1.87:8083/api/v1/report/companyUser-chart/load?fDate=2023-02-02&filterBy==WTD&tDate=2023-03-04',
    return this.http.get('http://192.168.1.87:8083/api/v1/report/lead-chart-volume/load?fDate='+resultdate.fdate+'&filterBy=='+resultdate.type+'&month='+resultdate.month+'&tDate='+resultdate.tdate+'&year='+resultdate.year,httpOptions)
    // return this.http.get('http://192.168.1.87:8085/api/v1/report/lead-chart-volume/load?fDate=2023-03-01&filterBy=WTD&month=3&tDate=2023-03-13&year=2023',httpOptions)
  }
}



