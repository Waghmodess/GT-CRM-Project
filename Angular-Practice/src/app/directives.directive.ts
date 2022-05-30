import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {

  constructor(private dir: ElementRef) {
    dir.nativeElement.style.color = "red";
    dir.nativeElement.style.background = "pink";
    // dir.nativeElement.style.display = "none";
  }

}
