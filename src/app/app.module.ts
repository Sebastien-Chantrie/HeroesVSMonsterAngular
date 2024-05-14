import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlateauComponent } from './plateau/plateau.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameOverComponent } from './game-over/game-over.component';
import { ShopComponent } from './shop/shop.component';
import { ForestComponent } from './forest/forest.component';
import { DonjonComponent } from './donjon/donjon.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    PlateauComponent,
    HomePageComponent,
    ForestComponent,
    GameOverComponent,
    ShopComponent,
    ForestComponent,
    DonjonComponent,
    WinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
