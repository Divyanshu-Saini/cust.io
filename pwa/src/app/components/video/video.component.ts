import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  localStream!: MediaStream;
  remoteStream!: MediaStream;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getVideoSignal().subscribe((stream: MediaStream) => {
      this.remoteStream = stream;
    });

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      this.localStream = stream;
      this.chatService.sendVideoSignal(stream);
    });
  }
}
