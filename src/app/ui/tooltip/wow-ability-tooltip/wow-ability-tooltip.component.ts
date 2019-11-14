import { Component, OnInit } from '@angular/core';

export interface WowAbility {
  name: string;
  icon: string;
  description: string;
  type: WowAbilityType;
}
export enum WowAbilityType {
  PASSIVE = 'Passive',
  ACTIVE = 'Active'
}

@Component({
  selector: 'pw-wow-ability-tooltip',
  templateUrl: './wow-ability-tooltip.component.html',
  styleUrls: ['./wow-ability-tooltip.component.scss']
})
export class WowAbilityTooltipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
