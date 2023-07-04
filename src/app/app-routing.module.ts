import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './componant/register/register.component';
import { ListComponent } from './componant/list/list.component';
import { LoginComponent } from './componant/login/login.component';
import { NavbarComponent } from './componant/navbar/navbar.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'navbar', component:NavbarComponent , children: [
    {path: 'list', component:ListComponent}
  ]},
  
  {path: '', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
