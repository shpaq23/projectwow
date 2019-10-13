import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @HostBinding('class.pw-btn-font') btnFont = true;
  @HostBinding('class.disabled')
  @Input() disabled: boolean;
  @HostBinding('class.loading')
  @Input() loading: boolean;

  ngOnInit(): void {
    // console.log(this.isLoading);
    // console.log(this.isDisabled);
  }

}
