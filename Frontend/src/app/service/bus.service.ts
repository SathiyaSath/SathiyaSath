import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Bus } from '../model/bus';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  private busviewURL = 'http://localhost:8080/Bus/viewbus';
  private savebusURL = 'http://localhost:8080/Bus/addbus';
  private updatebusURL = 'http://localhost:8080/Bus/update';
  private getbusByIdURL = 'http://localhost:8080/Bus/bus_id/{Id}';
  private deletebusByIdURL = 'http://localhost:8080/Bus/delete/{Id}';
  constructor(private http: HttpClient) {}

  getBusById(busId: number): Observable<Bus> {
    const url = this.getbusByIdURL.replace('{Id}', busId.toString());
    console.log(`getBusById-URL : ${url}`);
    return this.http.get<Bus>(url);
  }
  getAllBus(): Observable<any> {
    return this.http.get(this.busviewURL);
  }
  createBus(bus: Bus): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post<Bus>(this.savebusURL, bus, httpOptions);
  }
  updateBus(bus: Bus): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(bus);
    return this.http.put(this.updatebusURL, body, { headers: headers });
  }
  deleteBusById(busId: number): Observable<Bus> {
    const url = this.deletebusByIdURL.replace('{Id}', busId.toString());
    return this.http.delete<Bus>(url);
  }
}
