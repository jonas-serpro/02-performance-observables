import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayComponent } from './components/display/display.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, DisplayComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
