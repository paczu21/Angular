import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService } from 'app/i18n-support.service';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent  implements AfterViewInit {
  welcomeMsg = '';
  title = 'app works!';
  userName ='';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000 ; /* 1000 = 1초, 5초간 WAIT */

  constructor(public i18nSupporter: I18nSupportService) { }
  
  ngAfterViewInit(){
    const checkTouchedFn = () => {
      if(this.valid) return;

      alert('이름을 입력해 주세요.');
    };

    setTimeout(checkTouchedFn, WelcomeMsgComponent .CHK_KEYUP_WAIT_SEC);
  }

  onKeyUp(name){
    this.valid = name.length > 0;
  }
  
  setName(name){
    this.userName = name;
  }

  onChange(){
    this.valid = this.userName.length >0;
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName);
  }
}
