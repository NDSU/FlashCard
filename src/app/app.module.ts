import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { CreateSetComponent } from './create-set/create-set.component';
import { SetService } from './set.service';
import { CardService } from './card.service';
import { AccountService } from './account.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, CreateSetComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SetService, CardService, AccountService]
})
export class AppModule { }
