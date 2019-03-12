import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MessagesComponent,
        TicketComponent
    ],
    exports: [MessagesComponent,
              TicketComponent],
    providers: [MessagesService]
})
export class UiCommomModule { }
