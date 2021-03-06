import { ComponentList } from './component-list';
import { Directive, ViewContainerRef, Input, OnInit, ComponentFactoryResolver } from '@angular/core';

@Directive({
    selector: '[load-component]',
})

export class LoadComponentDirective implements OnInit {

    @Input('component')
    private _component;

    @Input('data')
    private _data;

    public ngOnInit() {
        if (this._component) {
        this._loadComponent(this._component, this._data);
        }
    }

    private _loadComponent(component: any, data: any): void {

        this._data = data;
        const _component = ComponentList[component];

        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(_component);

        const viewContainerRef = this.viewContainerRef;

        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);

        (<any> componentRef.instance).data = this._data;
    }

    constructor (public viewContainerRef: ViewContainerRef, private _componentFactoryResolver: ComponentFactoryResolver) {}
}