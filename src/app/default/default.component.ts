import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-default',
  template: `
    <p>
      {{ value | json }}
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultComponent implements OnInit {
  @Input() value;

  constructor() { }

  ngOnInit(): void {
  }

}
