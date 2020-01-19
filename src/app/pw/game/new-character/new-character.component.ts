import { Component, OnInit } from '@angular/core';
import { NewCharacterService } from '../../../services/utils/new-character/new-character.service';
import { NewCharacterStructure } from '../../../services/utils/new-character/new-character-structure';

@Component({
  selector: 'pw-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  newCharacterStructure: NewCharacterStructure;

  constructor(private newCharacterService: NewCharacterService) {

  }

  ngOnInit(): void {
    this.newCharacterStructure = this.newCharacterService.getNewCharacterStructure();
    console.log(this.newCharacterStructure);
  }


  onItemSelect(item: string): void {
    console.log(item);
  }

}
