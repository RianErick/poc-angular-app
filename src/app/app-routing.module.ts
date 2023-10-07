import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path : "" , redirectTo:"signup" , pathMatch:"full"},
  {path: "signup", loadChildren: () => import("./pages/login/login.module")
                                      .then((router) => router.LoginModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
