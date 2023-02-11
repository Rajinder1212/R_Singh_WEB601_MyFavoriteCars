import { Component } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
contentItem = {
  id:1,
  body:'Testing',
  type:'testing'
}

}
