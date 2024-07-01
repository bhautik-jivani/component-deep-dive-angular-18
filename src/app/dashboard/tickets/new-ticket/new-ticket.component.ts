import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, output, viewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ControlComponent, ButtonComponent, FormsModule]
})
export class NewTicketComponent implements OnInit, AfterViewInit {
    @ViewChild('form') private form?: ElementRef<HTMLFormElement>
    // private form = viewChild.required<ElementRef<HTMLFormElement>>('form')
    add = output<{title: string, text:string}>()

    ngOnInit() {
        console.log("ONINIT");
        console.log(this.form?.nativeElement); 
    }

    ngAfterViewInit() {
        console.log("AFTER VIEW INIT");
        console.log(this.form?.nativeElement);
    }

    onSubmit(title: string, ticketText: string) {
        this.add.emit({title: title, text: ticketText})
               
        this.form?.nativeElement.reset()
        // this.form().nativeElement.reset()
    }
}
