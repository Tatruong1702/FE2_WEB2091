import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { PhoneComponent } from './about/phone/phone';
import { RegisterComponent } from './register/register';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'about',
        component: AboutComponent,
        children: [
            {
        path: 'phone',
        component: PhoneComponent,
            },
        ]
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    }
];
