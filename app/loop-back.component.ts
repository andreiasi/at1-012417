import {Component} from "@angular/core";
/**
 * Created by Andrei on 2017-01-25.
 */

@Component({
    selector: 'loop-back',
    template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }

