import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  list = ['Andrzej', 'Michal', 'Marcin'];

  ngOnInit(): void {

  }


  onItemSelect(item: string): void {
    console.log(item);
  }

}
