import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.servies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;
  constructor(private faceSnapsService: FaceSnapService, private router: Router) {}
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
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
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
