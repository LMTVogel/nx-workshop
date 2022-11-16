import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoModule } from '@nx-workshop/ui/services/todo';
import { UiTodoModule } from '@nx-workshop/ui/todo';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, UiTodoModule, TodoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
