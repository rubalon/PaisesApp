import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  @Input()
  public placeholder: string = '';

  @Input()
  public intialterm: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  private debounce = new Subject<string>();
  private debounceSuscription? = new Subscription();

  ngOnInit(): void {
    this.debounceSuscription = this.debounce
    .pipe(
      debounceTime(500)
    )
    .subscribe( value => {
      this.onValue.emit(value)}
    )
  }

  ngOnDestroy(): void {
    this.debounceSuscription?.unsubscribe();
  }

  public emitValue(value: string): void {
    this.onValue.emit(value);
  }

  public onDebounce(value: string): void {
    this.debounce.next(value)
  }

}
