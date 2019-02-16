import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FetchComponent } from './fetch/fetch.component';
import { HomeComponent } from './home/home.component';
import { SendService } from './send.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IdSearchComponent } from './id-search/id-search.component';
import { IdDispComponent } from './id-disp/id-disp.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchComponent,
    HomeComponent,
    IdSearchComponent,
    IdDispComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:FetchComponent},
      {path:"disp", component:IdDispComponent},
      {path:"id",component:IdSearchComponent},
     {path:'home/:title' , component:HomeComponent},
      {path:'disp/:id' , component:IdDispComponent}
    ])
  ],
  providers: [SendService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
