import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[cutomLabel]'
})
export class CutomLabelDirective {

    private htmlElement?:  ElementRef<HTMLElement>
    private _color:  string = "red";
    private _errors?: ValidationErrors | null;
    
    @Input() set color (value: string){
        this._color = value;
        this.setStyle()
    }
    
    @Input() set errors (value: ValidationErrors | null | undefined){
       this._errors = value;
       this.setErrorMessage()
       
    }

    constructor(private el: ElementRef<HTMLElement>) { 

        this.htmlElement = el;
        
        // this.htmlElement.nativeElement.innerHTML = "asd";

    }

    setStyle():void {
        if( !this.htmlElement ) return;
        this.htmlElement!.nativeElement.style.color = this._color
    }
    
    public setErrorMessage():void {
        if( !this.htmlElement ) return;

        if( !this._errors ){
            this.htmlElement.nativeElement.innerText = "";
            return;
        } 
        
        const errors = Object.keys(this._errors);

        if( errors.includes("required") ){
            this.htmlElement.nativeElement.innerText = "Este campo es requerido";
            return
        }
        
        if( errors.includes("minlength") ){
            this.htmlElement.nativeElement.innerText = `El campo debe tener minimo ${this._errors['minlength'].requiredLength}, existen solo ${this._errors['minlength'].actualLength} caracteres escritos`;
            return
        }

        if( errors.includes("email") ){
            this.htmlElement.nativeElement.innerText = `No es un email válido`;
            return
        }


    }

}
