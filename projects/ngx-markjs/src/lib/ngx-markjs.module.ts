import { NgModule } from '@angular/core';
import { NgxMarkjsComponent } from './ngx-markjs.component';
import { MarkjsHighlightDirective } from './markjs-highlight.directive';



@NgModule({
  declarations: [NgxMarkjsComponent, MarkjsHighlightDirective],
  imports: [
  ],
  exports: [NgxMarkjsComponent]
})
export class NgxMarkjsModule { }
