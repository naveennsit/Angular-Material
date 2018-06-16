import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule'},
  {path: '**', redirectTo: 'contactmanager'}

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
