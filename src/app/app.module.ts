import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TtComponent } from './tt/tt.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlayerComponent } from './player/player.component';
import { WinnerComponent } from './winner/winner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TtComponent,
    TeamComponent,
    FooterComponent,
    HeaderComponent,
    PlayerComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
