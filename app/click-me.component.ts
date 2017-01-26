import {Component} from "@angular/core";
/**
 * Created by Andrei on 2017-01-25.
 */


@Component({
    selector: 'click-me',
    template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})

export class ClickMeComponent {
    clickMessage = '';

    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }
}
