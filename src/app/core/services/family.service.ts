import {catchError, Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private apiUrl = 'http://localhost:8080';

  constructor(private _http: HttpClient) {
  }

  getFamilies() {
    // return this._http.get(this.apiUrl).pipe(
    //   catchError(this.handleError)
    // );

    const dummyData = [
      { id: 1, name: 'Özel Ailesi' },
      { id: 2, name: 'Kaya Ailesi' },
    ];

    return of(dummyData)
  }

  private handleError(error: any): Observable<never> {
    console.error('error:', error);
    throw error;
  }
}
