import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoModule } from '@nx-workshop/ui/services/todo';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
