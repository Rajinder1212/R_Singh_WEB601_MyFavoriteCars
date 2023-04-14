import { Component } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})

export class ModifyContentComponentComponent {
  contentsArray: any;
  addContentToList(newContentItem: Content): void {
    this.contentsArray.addContent(newContentItem)
    .subscribe((newContentFromServer: any) =>
    this.contentsArray.push(newContentFromServer)
    );
}
}
