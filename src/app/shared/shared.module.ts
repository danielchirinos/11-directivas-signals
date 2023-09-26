import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CutomLabelDirective } from './directives/cutom-label.directive';



@NgModule({
    declarations: [
        CutomLabelDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CutomLabelDirective
    ]
})
export class SharedModule { }
