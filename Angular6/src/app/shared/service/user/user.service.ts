import { RestService } from './../../rest.service';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { IKeyValue } from '../../key-value.interface';

@Injectable()
export class UserService {
    constructor(private _restService: RestService) { }

    isLogInData: boolean;
    isLoggedIn(isLogin = false): boolean {
        if (isLogin) {
            return this.isLogInData = true;
        } else {
            if (this.isLogInData) {
                return this.isLogInData;
            }
            return this.isLogInData = false;
        }
    }

    getUser() {
        const headers = this._restService.setHeaders([
            // {key: 'Authorization', value: `Bearer ${environment.security_token}`},
            { key: 'Content-Type', value: 'application/json' }
        ]);
        const userUrl = environment.base_url + '/user';
        const data = this._restService.get(userUrl, headers);
        return data;
    }

    userLogin(loginFormData) {
        const headers: IKeyValue[] = [
            { key: 'Content-Type', value: 'application/json' }
        ];
        const userUrl = environment.base_url + '/login';
        return this._restService.post(userUrl, loginFormData, headers);
    }

    userRegister(registerFormData) {
        const headers: IKeyValue[] = [
            { key: 'Content-Type', value: 'application/json' }
        ];
        const userUrl = environment.base_url + '/register';
        return this._restService.post(userUrl, registerFormData, headers);
    }
}
