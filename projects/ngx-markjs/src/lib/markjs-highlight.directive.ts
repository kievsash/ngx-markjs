import {Directive} from '@angular/core';

declare var require: any;
const Mark = require('mark.js');

@Directive({
  selector: '[libMarkjsHighlight]'
})
export class MarkjsHighlightDirective {

  constructor() {
  }

}

