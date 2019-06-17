import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

// import { ApiAiClient } from 'api-ai-javascript';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { Observable, Subject, BehaviorSubject } from 'rxjs';

// Message class for displaying messages in the component
export class Message {
    constructor(public content: string, public sentBy: string) { }
}
//ApiAiConstants.DEFAULT_BASE_URL = "https://api.dialogflow.com/v1/";
@Injectable({
    providedIn: 'root'
})
export class ChatService {
    readonly token = environment.dialogflow.jaymykels;
    readonly client = new ApiAiClient({ accessToken: this.token });

    conversation = new BehaviorSubject<Message[]>([]);

    constructor() { }

    // Adds message to source
    update(msg: Message) {
        this.conversation.next([msg]);
    }

    async converse(msg: string) {
        const userMessage = new Message(msg, 'user');
        this.update(userMessage);

        const result = await this.client.textRequest(msg)
            .then(res => {
                const speech = res.result.fulfillment.speech;
                const botMessage = new Message(speech, 'bot');
                this.update(botMessage);
                console.log("speech", res)
            });

        return result;
    }
}