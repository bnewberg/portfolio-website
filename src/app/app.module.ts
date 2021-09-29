import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroductionComponent } from './introduction/introduction.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        IntroductionComponent,
        MyServicesComponent,
        AboutMeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
