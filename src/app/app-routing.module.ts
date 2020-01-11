import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { componentFactoryName } from '@angular/compiler';
import { ErrorComponent } from './components/error.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'find', redirectTo: 'search', pathMatch: 'prefix'},
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
