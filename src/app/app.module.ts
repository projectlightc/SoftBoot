import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionSoftBoostComponent } from './section-soft-boost/section-soft-boost.component';
import { WhatHaveWeDoComponent } from './what-have-we-do/what-have-we-do.component';
import { SectionAcquaintedComponent } from './section-acquainted/section-acquainted.component';
import { SectionCFComponent } from './section-cf/section-cf.component';
import { SectionWhyUsComponent } from './section-why-us/section-why-us.component';
import { SectionProccessComponent } from './section-proccess/section-proccess.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionSoftBoostComponent,
    WhatHaveWeDoComponent,
    SectionAcquaintedComponent,
    SectionCFComponent,
    SectionWhyUsComponent,
    SectionProccessComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
