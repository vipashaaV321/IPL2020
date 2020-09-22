import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { TtComponent } from './tt/tt.component';
import { WinnerComponent } from './winner/winner.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'MatchSchedule', component: TtComponent },
  { path: 'Teams', component: TeamComponent },
  { path: 'Winner', component: WinnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
