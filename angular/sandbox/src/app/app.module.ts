import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooListComponent } from './foo/foo-list/foo-list.component';
import { FooEditComponent } from './foo/foo-edit/foo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    AdminComponent,
    HeaderComponent,
    FooListComponent,
    FooEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
