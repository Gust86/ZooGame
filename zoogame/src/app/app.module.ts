import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZookeeperComponent } from './zookeeper/zookeeper.component';
import { AnimalComponent } from './animal/animal.component';
import { ChoreComponent } from './chore/chore.component';

@NgModule({
  declarations: [
    AppComponent,
    ZookeeperComponent,
    AnimalComponent,
    ChoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
