import { ListFilterPipe } from './pipes/filter.piper';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/Card/cardComponent';
import { HeaderComponent } from './components/Header/headerComponent';
import { FooterComponent } from './components/Footer/footerComponent';
import { MoviesComponent } from './components/Movies/moviesComponent';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    ListFilterPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [CardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
