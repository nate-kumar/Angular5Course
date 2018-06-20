import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() manageState: boolean;
  constructor(private tr: TemplateRef<any>, private vc: ViewContainerRef) { }

  OnInit() {

  }
  @Input() set appDropdown(condition: boolean) {
    if (!condition){
      this.vc.createEmbeddedView(this.tr)
    }
    else {
      this.vc.clear();
    }
  }

  toggleManage() {
    this.manageState = !this.manageState;
  }


}
