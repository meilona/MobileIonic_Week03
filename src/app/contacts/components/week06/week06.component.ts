import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../contact.model';

@Component({
  selector: 'app-week06',
  templateUrl: './week06.component.html',
  styleUrls: ['./week06.component.scss'],
})
export class Week06Component implements OnInit {
  @Input() contact: Contact;
  constructor() { }

  ngOnInit() {}

}
