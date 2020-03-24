import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "../../_services/websocket.service";

@Component({
  selector: `app-messageSender`,
  templateUrl: `./message-sender.component.html`,
  styleUrls: [`./message-sender.component.scss`]
})
export class MessageSenderComponent implements OnInit {
  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {}

  onTypingMessage(event) {
    this.websocketService.onTypingMessage(event);
    // console.log('is typing... 2')
  }
}
