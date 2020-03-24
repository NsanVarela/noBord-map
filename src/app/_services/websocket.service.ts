import { Injectable, OnInit, OnDestroy } from '@angular/core'
import { webSocket } from 'rxjs/webSocket'
import { takeUntil } from 'rxjs/operators'
import { Subject, Observable } from 'rxjs'
import * as jwt from 'jsonwebtoken'
import { environment } from '../../environments/environment'

interface token {
  outgoingMsg: {
    id: string,
    name: string,
    language: string
    password: string,
    message: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnInit, OnDestroy {

  private websocketUrl: string = environment.websocketApi
  private jwtKey: string = environment.jwtKey
  private subject = webSocket({ url: this.websocketUrl, deserializer: msg => msg })
  private destroy$: Subject<boolean> = new Subject<boolean>()

  constructor() { }

  ngOnInit() {
    return new Observable<token> (observer => {
      this.subject.pipe(takeUntil(this.destroy$)).subscribe(messageEvent => {
        const isMessageReceived: boolean = messageEvent.data !== null && messageEvent.data !== ``
        if (isMessageReceived) {
          const token = messageEvent.data.toString()
          const regex = /"/gi
          const newToken = token.replace(regex, ``)
          const decodedToken: object | string = jwt.verify(
            newToken,
            environment.jwtKey
          )
          observer.next(this.onSendToken({outgoingMsg: decodedToken}))
        }
      })
    });
  }

  onTypingMessage(event) {
    const message = (event.target as HTMLInputElement).value
    if (event.key === `Enter`) {
      this.onPressEnter(event)
      this.submitWS(message)
    }
  }

  submitWS(msgToSend: string) {
    console.log('details : ', msgToSend)
    const idSession: string = sessionStorage.getItem(`id`)
    const nameSession: string = sessionStorage.getItem(`name`)
    const languageSession: string = sessionStorage.getItem(`language`)
    const passwordSession: string = sessionStorage.getItem(`password`)
    const token = jwt.sign(
      {
        id: idSession,
        name: nameSession,
        language: languageSession,
        password: passwordSession,
        message: msgToSend
      },
      this.jwtKey
    )
    jwt.verify(token, this.jwtKey)
    const sentMsg = new MessageEvent(`send`, {
      data: token
    })
    this.subject.next(sentMsg.data)
  }

  onSendToken(outgoingMsg) {
    return outgoingMsg
  }

  onPressEnter(event): boolean {
    if(event.which === 13 || event.keyCode === 13) {
      event.currentTarget.value = ``
    }
    return event.which === 13 || event.keyCode === 13
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

}
