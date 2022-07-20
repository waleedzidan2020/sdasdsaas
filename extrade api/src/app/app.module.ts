import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ResultComponent } from './result/result.component';
import { AppRoutingModule } from './appRouting';
import { UserServices } from './Services/UserServices';
import { UserComponent } from './User/user.component';
import { LogInComponent } from './Account/log-in/log-in.component';
import { AccountService } from './Services/Account.service';


@NgModule({
  declarations: [
    
    AppComponent,
    UserComponent,
    ResultComponent,
    LogInComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserServices,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }