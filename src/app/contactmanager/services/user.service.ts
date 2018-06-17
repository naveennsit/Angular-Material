import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  storeData = {
    users: []
  };
  private _user = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {
  }

  get user(): Observable<User[]> {
    return this._user.asObservable();
  }

  loadAll() {
    const API_URL = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<User[]>(API_URL).subscribe((data) => {
        this.storeData.users = data;
        this._user.next(Object.assign({}, this.storeData).users);
      },
      () => {
        console.log('Failed to fetch users');
      });
  }

  getUserById(id) {
    return this.storeData.users.find((x) => x.id === parseInt(id));
  }

}
