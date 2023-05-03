import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PersonalComponent } from './componentes/personal/personal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { E404Component } from './componentes/e404/e404.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "personal", component: PersonalComponent},
  {path: 'nosotros', component: NosotrosComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
