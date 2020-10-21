import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-on-push',
  template: `
  <p>
    {{ value | json }}
  </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent {
  @Input() value: any;
  @Input() trigger: Observable<void>;
  constructor(private changeDetector: ChangeDetectorRef) {
    
  }
  public ngOnInit(){
    this.trigger.subscribe(() => this.changeDetector.markForCheck());
  }

}
