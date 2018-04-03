import { Directive, NgModule, Type, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { LoadComponentDirective } from './load-component.directive';

@NgModule({
    declarations: [LoadComponentDirective],
    imports: [],
    providers: [],
    exports: [LoadComponentDirective]
})

export class LoadComponentModule {
    public static withComponents(components: Array<Type<any> | any[]>) {
        return {
            ngModule: LoadComponentDirective,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true}
            ]
        };
    }
}
