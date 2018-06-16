import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactmanagerAppComponent} from './contactmanager-app/contactmanager-app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MainContentComponent} from './components/main-content/main-content.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {MaterialModule} from '../shared/material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
],
declarations: [ContactmanagerAppComponent,
  ToolbarComponent,
  MainContentComponent,
  SidenavComponent]
})

export class ContactmanagerModule {
}
