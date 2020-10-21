import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  template: `
    <p> {{ observable | async | json }} </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableComponent implements OnInit {
  @Input() observable: Observable<{message: string}>
  value: any = {message: `I'm unchanged`};

  constructor(private changeDetector: ChangeDetectorRef) {
    // changeDetector.detach();
   }

  ngOnInit(): void {
    // this.observable.subscribe(value => {
    //  this.value = value;
    //  this.changeDetector.detectChanges();
    // });
    
  }

}
