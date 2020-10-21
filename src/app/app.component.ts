import { Component, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <input [formControl]="inputControl">
    <button (click)="onclick()">Trigger change detection</button>

    <h3>Actual</h3>
    <p> {{ value | json }}</p>

    <h3>On push</h3>
    <app-on-push [value]="value" [trigger]="triggerSubject"></app-on-push>

    <h3>Default</h3>
    <app-default [value]="value"></app-default>

    <h3>Observable</h3>
    <app-observable [observable]="observable"></app-observable>

    <h3>Timeout</h3>
    <p> {{ fruit}}
  `,
  styles: [
    
  ]
})
export class AppComponent {
  public value = {
    message: `I'm unchanged`
  };
  public fruit = 'banana';

  public inputControl = new FormControl('');
  public triggerSubject = new Subject<void>();
  public observable: Observable<any>;


  constructor(ngZone: NgZone){
    // Modify property
    this.inputControl.valueChanges.subscribe(message => this.value.message = message);
    
    // Replace entire object
    // this.inputControl.valueChanges.subscribe(message => this.value = {message});

    this.observable = this.inputControl.valueChanges.pipe(
      map(message => ({message}))
    )
    // setInterval(() => this.fruit = 'apple', 5000)
    // ngZone.runOutsideAngular(() =>
    //   setInterval(() => this.fruit = 'apple', 5000)
    // );
  }

  onclick(){
    this.triggerSubject.next();
  }
}
