import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MessagesComponent
    ],
    exports: [MessagesComponent],
    providers: [MessagesService]
})
export class UiCommomModule { }
