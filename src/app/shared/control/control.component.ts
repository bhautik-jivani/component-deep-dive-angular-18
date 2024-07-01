import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, HostListener, ViewEncapsulation, afterNextRender, afterRender, contentChild, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control'
  // @HostListener('click') onClick() {
  //   console.log("Clicked!");
  // }

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')
  
  label = input.required<string>()
  private el = inject(ElementRef)

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    })

    afterNextRender(() => {
      console.log('afterNextRender');
      
    })
  }

  ngAfterContentInit() {
    
  }

  onClick() {
    console.log("Clicked!");
    console.log(this.el);
    // console.log(this.control);
    console.log(this.control());
    
  }
}
