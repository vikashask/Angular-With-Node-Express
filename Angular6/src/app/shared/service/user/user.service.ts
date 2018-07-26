import { RestService } from './../../rest.service';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { IKeyValue } from '../../key-value.interface';

@Injectable()
export class UserService {
    constructor(private _restService: RestService) { }

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
        const payload = { email: loginFormData.username, password: loginFormData.password };

        const headers: IKeyValue[] = [
            { key: 'Content-Type', value: 'application/json' }
        ];
        const userUrl = environment.base_url + '/login';
        const data = this._restService.post(userUrl, payload, headers);
        return data;
    }
}
