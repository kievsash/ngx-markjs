# In development

# ngx-markjs

It is Angular 14 wrapper for very cool text highlighting lib [Mark.js](https://markjs.io)

## How to use

### Install
```
npm i mark.js
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
     [markjsHighlight]="searchText"
     [markjsConfig]="config"
     [scrollToFirstMarked]="true"
>
```

### If you want to use it from source code

Incase of some compilation issues you can try to import ngxMarkjsModule directly in your application from .tx file

```
import {NgxMarkjsModule} from 'ngx-markjs/src/public-api'; 
```

### Start demo project

Clone this repo and do install

```
npm install

ng serve
```
![demo app](ngx-markjs.gif)

Additional mark.js config params can be found on its [officail site](https://markjs.io)

Did you Like this lib? Follow me on [Twitter](https://twitter.com/El_Extremal) for more Angular and RxJS staff!

Need a mentorship for Angular and RxJS? Find me on [codementor.io](https://www.codementor.io/alexanderposhtaruk)
