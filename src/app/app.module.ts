import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FactCheckComponent } from './fact-check/fact-check.component';
import { HotTopicsComponent } from './hot-topics/hot-topics.component';
import { PopularFactsComponent } from './popular-facts/popular-facts.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FactCheckComponent,
    HotTopicsComponent,
    PopularFactsComponent,
    SubscriptionComponent
  ],
  imports: [BrowserModule, HttpClientModule, InfiniteScrollModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
