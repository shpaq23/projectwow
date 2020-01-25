import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FaIcon } from '../fa-icon.enum';
import { Subject } from 'rxjs';
import { BaseComponent } from '../../pw/base-component';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pw-arrow-list-selector',
  templateUrl: './arrow-list-selector.component.html',
  styleUrls: ['./arrow-list-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowListSelectorComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() list: string[];

  @Input() listName: string;

  @Input() selected: string;

  @Output() selectedItemEmitter = new EventEmitter<string>();

  chevronLeft = FaIcon.chevronLeft;

  chevronRight = FaIcon.chevronRight;

  canSelectNext: boolean;

  canSelectPrevious: boolean;

  selectedItem: string;

  private debouncer: Subject<string> = new Subject<string>();

  constructor(private changeDetectionRef: ChangeDetectorRef) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.list) {
      this.selectedItem = this.list[0];
      this.setCanSelectNext();
      this.setCanSelectPrevious();
    }

    if (changes.selected) {
      this.selectedItem = this.selected;
      this.setCanSelectNext();
      this.setCanSelectPrevious();
      this.changeDetectionRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        this.takeUntilDestroy(),
        debounceTime(50))
      .subscribe(value => {
        this.selectedItemEmitter.emit(value);
      });
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
    this.debouncer.next(this.selectedItem);
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
