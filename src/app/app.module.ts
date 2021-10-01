import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RosangelaWalletComponent } from './rosangelaWallet/rosangelaWallet.component';
import { RosangelaCurrencyComponent } from './rosangelaCurrency/rosangelaCurrency.component';
import { RosangelaWalletService } from './rosangelaWallet.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'rosangelaWallet', component: RosangelaWalletComponent },
      { path: 'rosangelaCurrency', component: RosangelaCurrencyComponent },
    ]),
    
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    RosangelaWalletComponent,
    RosangelaCurrencyComponent,
  ],
  bootstrap: [AppComponent],
  providers: [RosangelaWalletService],
})
export class AppModule {}
