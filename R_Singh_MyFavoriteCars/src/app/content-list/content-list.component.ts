import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
contentArray : Content[];
Title: string = '';
ifTitleExists : boolean | null = null;

searchByTitle(){
  this.ifTitleExists = this.contentArray.some(content => content.title === this.Title);
}
constructor(){
  this.contentArray = [
    {
      id: 1 ,
      title : 'Range Rover',
      description : 'The Land Rover Range Rover (generally known simply as the Range Rover) is a 4x4 motor car produced by Land Rover, a marque and sub-brand of Jaguar Land Rover. The Range Rover line was launched in 1970 by British Leyland and is now in its fifth generation.',
      creator:'British Leyland',
      imgURL : 'https://en.wikipedia.org/wiki/Range_Rover',
      type : 'Range Rover AutoBiography'
  },
  {
    id: 2 ,
    title : 'Honda',
    description : 'Soichiro Honda (本田 宗一郎, Honda Sōichirō, 17 November 1906 – 5 August 1991) was a Japanese engineer and industrialist.In 1948, he established Honda Motor Co., Ltd. and oversaw its expansion from a wooden shack manufacturing bicycle motors to a multinational automobile and motorcycle manufacturer.',
    creator:'Soichiro Honda',
    imgURL : 'https://en.wikipedia.org/wiki/Soichiro_Honda',
    type : 'Honda Motor Cp '
}, 
{
  id: 3 ,
  title : 'Elantra',
  description : 'Elantra got a slightly roomier interior and a more sophisticated infotainment system. The standard engine is a 147-hp four-cylinder teamed with a continuously variable transmission',
  creator:'Luc Donckerwolke',
  imgURL : 'https://en.wikipedia.org/wiki/Hyundai_Elantra',
  type : 'Hyundai Elantra  '
},

{
  id: 4 ,
  title : 'Civic',
  description : ' high market availability and the opportunities offered by its lightweight chassis',
  creator:' Honda',
  imgURL : 'https://en.wikipedia.org/wiki/Honda_Civic',
  type : 'Honda Civic'
},
{
  id: 5 ,
  title : 'Corvette',
  description : 'With eight design generations, noted sequentially from C1 to C8, the Corvette is noted for its performance and distinctive fiberglass or composite panel',
  creator:'Harley Earl',
  imgURL : 'https://en.wikipedia.org/wiki/Chevrolet_Corvette',
  type : 'Chevrolet Corvette'
},
{
  id: 6 ,
  title : 'Mercedes',
  description : 'Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG is headquartered in Stuttgart, Baden-Württemberg, Germany. ',
  creator:'Karl Benz',
  imgURL : 'https://en.wikipedia.org/wiki/Mercedes-Benz',
  type : 'G Wagan '
},
{
  id: 7 ,
  title : 'Jaguar',
  description : 'Founded, 26 October 1933; 89 years ago (1933-10-26) ; Founder, William Lyons ; Fate, Car manufacturing merged with Land Rover in 2013 as Jaguar Land Rover. ',
  creator:'Willam Lyons',
  imgURL : 'https://en.wikipedia.org/wiki/Jaguar_Cars',
  type : 'Jaguar '
}
  ]
}
}
