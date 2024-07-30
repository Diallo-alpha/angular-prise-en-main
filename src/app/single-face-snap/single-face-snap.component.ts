import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.servies';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.css'
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;
  constructor(private faceSnapsService: FaceSnapService) {}
ngOnInit(): void {
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped =  false;
}
  // onSnap (): void{
  //   if(this.userHasSnapped){
  //     this.unSnap();
  //   }else{
  //     this.snap();
  //   }
  // }
  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
