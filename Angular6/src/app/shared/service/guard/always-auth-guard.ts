import { CanActivate } from '@angular/router';

export class AlwaysAuthGuard implements CanActivate {
    canActivate() {
        console.log('AlwaysAuthGuard');
        return true;
    }
}
