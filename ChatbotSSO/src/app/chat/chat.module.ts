import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ChatDialogComponent,
        ChatComponent
    ],
    exports: [ChatDialogComponent], // <-- export here
    providers: [ChatService]
})
export class ChatModule { }