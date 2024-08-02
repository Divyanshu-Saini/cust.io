import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://0.0.0.0:3000', {
      query: { token: localStorage.getItem('token') }
    });
  }

  joinRoom(room: string) {
    this.socket.emit('joinRoom', room);
  }

  sendMessage(message: string) {
    this.socket.emit('chat message', message);
  }

  getMessages(): Observable<string> {
    return new Observable<string>((observer) => {
      this.socket.on('chat message', (message: string) => observer.next(message));
    });
  }

  sendVideoSignal(stream: MediaStream) {
    this.socket.emit('video signal', stream);
  }

  getVideoSignal(): Observable<MediaStream> {
    return new Observable<MediaStream>((observer) => {
      this.socket.on('video signal', (stream: MediaStream) => observer.next(stream));
    });
  }

  sendScreenSignal(stream: MediaStream) {
    this.socket.emit('screen signal', stream);
  }

  getScreenSignal(): Observable<MediaStream> {
    return new Observable<MediaStream>((observer) => {
      this.socket.on('screen signal', (stream: MediaStream) => observer.next(stream));
    });
  }
}
