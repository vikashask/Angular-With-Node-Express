import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { IKeyValue } from './key-value.interface';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestService {

    constructor(private http: HttpClient) {
    }

    setHeaders(headers: IKeyValue[]): HttpHeaders {
        let properHeaders = new HttpHeaders();
        for (const header of headers) {
            properHeaders = properHeaders.append(header.key, header.value);
        }
        return properHeaders;
    }

    // GET generic
    get(url, httpHeaders: HttpHeaders) {
        const options = { headers: httpHeaders, httpParams: HttpParams };
        const result = this.http.get(url, options);
        return result;
    }

    // POST generic
    post(url, payload, headers: IKeyValue[]) {
        const properHeaders: HttpHeaders = this.setHeaders(headers);
        const result = this.http.post(url, payload, { headers: properHeaders });
        return result;
    }

    // PUT generic
    put(url, payload, headers: IKeyValue[]) {
        const properHeaders: HttpHeaders = this.setHeaders(headers);
        const result = this.http.put(url, payload, { headers: properHeaders });
        return result;
    }

    // DELETE generic
    delete(url, httpHeaders: HttpHeaders, httpParams: HttpParams) {
        const options = { headers: httpHeaders, httpParams: HttpParams };
        const result = this.http.delete(url, options);
        return result;
    }

}
