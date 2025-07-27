import { Routes } from '@angular/router';
import { Home } from './components/components/home/home';
import { About } from './components/components/about/about';
import { Portfolio } from './components/components/portfolio/portfolio';
import { Contact } from './components/components/contact/contact';
import { NotFind } from './components/components/not-find/not-find';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'about', component: About, title: 'About' },
  { path: 'portfolio', component: Portfolio, title: 'Portfolio' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: '**', component: NotFind, title: 'Not-Find' },
];
