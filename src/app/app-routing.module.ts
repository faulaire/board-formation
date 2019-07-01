import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationComponent} from './components/application/application.component';
import {ConnectedGuard} from './guards/connected.guard';
import {BoardsComponent} from './components/boards/boards.component';
import {BoardComponent} from './components/board/board.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: ApplicationComponent, canActivate : [ConnectedGuard], children:
      [
        { path: '', component: BoardsComponent, pathMatch: 'full' },
        { path: 'board/:boardId', component: BoardComponent }
      ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
