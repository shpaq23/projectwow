import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pw-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  constructor() { }
  @HostBinding('style.top') @Input() top = '0px';
  @HostBinding('style.left') @Input() left = '0px';
  @Input() description: string;


  ngOnInit() {
  }

}
