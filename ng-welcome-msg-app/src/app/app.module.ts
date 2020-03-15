import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdToolbarModul, MdSnackBarModule, MdCardModule, MdInputModule, MdRadioModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';

import { I18nSupportService } from './i18n-support.service';
import { LangSelectorBtnPipe } from './lang-selector/lang-selector-btn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent,
    LangSelectorBtnPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
//    BrowserAnimationsModule,
//    MdToolbarModule, MdSnackBarModule, MdCardModule, MdInputModule, MdRadioModule, MdButtonModule
  ],
  providers: [I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
