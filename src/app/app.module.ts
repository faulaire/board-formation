import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ApplicationComponent } from './components/application/application.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SearchComponent } from './components/shared/search/search.component';
import { BoardsComponent } from './components/boards/boards.component';
import { BoardComponent } from './components/board/board.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {WebStorageModule} from 'ngx-store';
import {MatListModule} from '@angular/material';
import { ModalBoardComponent } from './components/shared-modal/modal-board/modal-board.component';
import { ColumnComponent } from './components/column/column.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplicationComponent,
    HeaderComponent,
    SearchComponent,
    BoardsComponent,
    BoardComponent,
    FooterComponent,
    ModalBoardComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WebStorageModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    PerfectScrollbarModule
  ],
  entryComponents: [ModalBoardComponent], // Pour dire a angular qu'on a le droit de lui passer le composant
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
