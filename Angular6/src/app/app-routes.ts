import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { RegisterComponent } from 'src/app/shared/components/register/register.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AlwaysAuthGuard } from './shared/service/guard/always-auth-guard';
import { OnlyLoggedInUsersGuard } from './shared/service/guard/only-loggedIn-users-guard';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'books', pathMatch: 'full' },
            { path: 'books', component: BookListComponent },
        ],
        canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard]
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

