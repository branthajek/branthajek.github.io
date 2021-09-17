import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  emailTo = 'branthajek@gmail.com'
  
  openLinkedIn(){
    window.open("https://www.linkedin.com/in/brant-hajek-2897b61a3/")
  }
  openEmail(){
    window.open('mailto:' + this.emailTo, '_self');
  }
  openGitHub(){
    window.open("https://github.com/branthajek")
  }
  

}
