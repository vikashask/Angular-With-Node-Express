import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/shared/service/user/user.service';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
    constructor(private userService: UserService) { }

    canActivate() {
        console.log('OnlyLoggedInUsers');
        if (this.userService.isLoggedIn()) {
            return true;
        } else {
            window.alert("You don't have permission to view this page");
            return false;
        }
    }
}
