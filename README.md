# In development

# ngx-markjs

It is Angular 8 wrapper for very cool text highlighting lib [Mark.js](https://markjs.io)

## How to use

### Install
```
npm i ngx-markjs
```

### Import module

```
...
import {NgxMarkjsModule} from 'ngx-markjs';

@NgModule({
...
  imports: [
...
    NgxMarkjsModule
  ],
...
})
export class AppModule { }
```
### Use directive
```
<div class="content_wrapper" 
     [markjsHighlight]="searchValueObservable$"
     [markjsConfig]="config"
     [scrollToFirstMarked]="true"
>
```

Additional mark.js config params can be found on its [officail site](https://markjs.io)
