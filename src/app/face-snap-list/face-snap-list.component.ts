import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snaps.servies';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!: FaceSnap[];
  constructor(private faceSnapsServices: FaceSnapService){}
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsServices.getFaceSnaps();
}
}
