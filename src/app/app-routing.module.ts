import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PlateauComponent } from './plateau/plateau.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'plateau', component: PlateauComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
