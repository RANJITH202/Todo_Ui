import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { PageNotFoundComponent } from './ErrorPage/page-not-found/page-not-found.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { TodoListComponent } from './Dashboard/todo-list/todo-list.component';
import { TodoKanbanComponent } from './Dashboard/todo-kanban/todo-kanban.component';
import { TodoFormComponent } from './Dashboard/todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonMaterialModule } from './common-material-module';
import { SideBarComponent } from './Dashboard/side-bar/side-bar.component';
import { FullComponentComponent } from './Dashboard/full-component/full-component.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    TodoListComponent,
    TodoKanbanComponent,
    TodoFormComponent,
    SideBarComponent,
    FullComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonMaterialModule,
    DragDropModule,
    FormsModule,
    MatChipsModule
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
