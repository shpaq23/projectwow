import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FaIcon } from '../fa-icon.enum';

@Component({
  selector: 'pw-arrow-list-selector',
  templateUrl: './arrow-list-selector.component.html',
  styleUrls: ['./arrow-list-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowListSelectorComponent implements OnInit {

  @Input() list: string[];

  @Input() listName: string;

  @Output() selectedItemEmitter = new EventEmitter<string>();

  chevronLeft = FaIcon.chevronLeft;

  chevronRight = FaIcon.chevronRight;

  canSelectNext: boolean;

  canSelectPrevious: boolean;

  selectedItem: string;

  constructor(private changeDetectionRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.selectedItem = this.list[0];
    this.afterItemSelection();
  }

  selectNextItem(): void {
    const currentIndex = this.list.findIndex(value => value === this.selectedItem);
    this.selectedItem = this.list[currentIndex + 1];
    this.afterItemSelection();
  }

  selectPreviousItem(): void {
    const currentIndex = this.list.findIndex(value => value === this.selectedItem);
    this.selectedItem = this.list[currentIndex - 1];
    this.afterItemSelection();
  }

  private emitSelected(): void {
    this.selectedItemEmitter.emit(this.selectedItem);
  }

  private setCanSelectNext(): void {
    const currentIndex = this.list.findIndex(value => value === this.selectedItem);
    this.canSelectNext = this.list[currentIndex + 1] !== undefined;
  }

  private setCanSelectPrevious(): void {
    const currentIndex = this.list.findIndex(value => value === this.selectedItem);
    this.canSelectPrevious = this.list[currentIndex - 1] !== undefined;
  }

  private afterItemSelection(): void {
    this.setCanSelectNext();
    this.setCanSelectPrevious();
    this.emitSelected();
    this.changeDetectionRef.detectChanges();
  }

}
