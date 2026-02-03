import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserBookings } from './user-bookings/user-bookings';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'HotelBooking.com'
    },
    {
        path:'bookings',
        component: UserBookings,
        title: 'HotelBooking.com | Bookings'
    }
];
