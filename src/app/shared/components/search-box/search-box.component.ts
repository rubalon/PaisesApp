import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  /**
   * emitValue
   */
  public emitValue(value: string): void {
    this.onValue.emit(value);
  }

}