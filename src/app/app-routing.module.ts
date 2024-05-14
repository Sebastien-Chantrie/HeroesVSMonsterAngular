import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PlateauComponent } from './plateau/plateau.component';
import { ForestComponent } from './forest/forest.component';
import { GameOverComponent } from './game-over/game-over.component';
import { ShopComponent } from './shop/shop.component';
import { DonjonComponent } from './donjon/donjon.component';
import { WinComponent } from './win/win.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'plateau', component: PlateauComponent},
  { path: 'forest', component: ForestComponent},
  { path: 'game-over', component: GameOverComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'donjon', component: DonjonComponent},
  { path: 'win', component: WinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
