import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoraAtualService } from './horaatual.service';
import { GetHoraAtualComponent } from './getHoraAtual.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, GetHoraAtualComponent],
  providers: [HoraAtualService],
  bootstrap: [AppComponent]
})
export class AppModule { }
