import { Component, Inject, Input, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  providers: [],
  animations: [
    trigger('overlayState', [
      state('inactive', style({
        opacity: '0',
        transform: 'scale(.5)'
      })),
      state('active', style({
        opacity: '1',
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ])
  ]
})
export class OverlayComponent {

  @Input()
  public isOutsideCloseable: boolean = true;

  @Input()
  public header: string;

  @Input()
  public disableClose: boolean;

  @Input()
  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
    this.showInner = value;
    if (value === 'active') {
      this._el.classList.add('display');
      setTimeout(() => {
        this._el.classList.add('show');
      }, 250);
    } else if (value === 'inactive' && this._el.classList.contains('show')) {
      this._el.classList.remove('show');
      setTimeout(() => {
        this._el.classList.remove('display');
      }, 250);
    }
  }
  public showInner: string;

  private _state: string;

  private _el = this._elementRef.nativeElement;

  constructor(private _elementRef: ElementRef) { }

  public close(): void {
    if (this.disableClose)
    return;
    this.state = 'inactive';
  }

  public closeFromOutside(): void {
    if (this.isOutsideCloseable) {
    this.close();
  }
}}
