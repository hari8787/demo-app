import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictComponent } from './district/district.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:"district",component:DistrictComponent},
                        {path:'home',component:HomeComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
