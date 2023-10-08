import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path : '' , redirectTo:"signin" , pathMatch:"full"},

  {path: '', loadChildren: () => import("./pages/login/login.module")
                                      .then((router) => router.LoginModule)},

  {path: 'home', loadChildren: () => import("./pages/home/home.module")
                                      .then((router) => router.HomeModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
