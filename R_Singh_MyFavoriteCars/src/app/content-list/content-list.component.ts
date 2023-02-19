import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
contentArray : Content[];
constructor(){
  this.contentArray = [
    {
      id: 1 ,
      title : 'Range Rover',
      description : 'The Land Rover Range Rover (generally known simply as the Range Rover) is a 4x4 motor car produced by Land Rover, a marque and sub-brand of Jaguar Land Rover. The Range Rover line was launched in 1970 by British Leyland and is now in its fifth generation.',
      creator:'British Leyland',
      imgURL : 'https://en.wikipedia.org/wiki/Range_Rover',
      type : 'Range Rover AutoBiography'
  }
  ]
}
}
