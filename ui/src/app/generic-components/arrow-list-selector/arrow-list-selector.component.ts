import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FaIcon } from 'src/app/generic-components/fa-icon.enum';
import { Option } from 'src/app/generic-components/Option';
import { BaseComponent } from 'src/app/utils/base-component';
import { NgChanges } from 'src/app/utils/NgChanges';

@Component({
  selector: 'pw-arrow-list-selector[list]',
  templateUrl: './arrow-list-selector.component.html',
  styleUrls: ['./arrow-list-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowListSelectorComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() list: Array<Option>;

  @Input() listName: string;

  @Input() selected: Option;

  @Output() selectedItemEmitter = new EventEmitter<Option>();

  chevronLeft = FaIcon.chevronLeft;

  chevronRight = FaIcon.chevronRight;

  selectedItem: Option;

  private debouncer: Subject<Option> = new Subject<Option>();

  constructor(private changeDetectionRef: ChangeDetectorRef) {
    super();
  }

  ngOnChanges(changes: NgChanges<ArrowListSelectorComponent>): void {

    if ((changes.list && changes.list.currentValue) || (changes.selected && changes.selected)) {
      this.selectedItem = this.list[0];
      if (this.selected) {
        this.selectedItem = this.selected;
      }
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
    const currentIndex = this.list.findIndex(option => option.displayValue === this.selectedItem.displayValue);
    this.selectedItem = this.list[currentIndex + 1];
    this.afterItemSelection();
  }

  selectPreviousItem(): void {
    const currentIndex = this.list.findIndex(option => option.displayValue === this.selectedItem.displayValue);
    this.selectedItem = this.list[currentIndex - 1];
    this.afterItemSelection();
  }

  get canSelectNext(): boolean {
    const currentIndex = this.list.findIndex(option => option.displayValue === this.selectedItem.displayValue);
    return this.list[currentIndex + 1] !== undefined;
  }

  get canSelectPrevious(): boolean {
    const currentIndex = this.list.findIndex(option => option.displayValue === this.selectedItem.displayValue);
    return this.list[currentIndex - 1] !== undefined;
  }

  private emitSelected(): void {
    this.debouncer.next(this.selectedItem);
  }


  private afterItemSelection(): void {
    this.emitSelected();
    this.changeDetectionRef.detectChanges();
  }

}
