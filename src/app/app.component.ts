import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnap[];
  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
      "Arcibalde",
      "Mon meilleur description",
      new Date(),
      10,
      "https://images.stockcake.com/public/5/8/9/589f6b96-8196-40a1-bb6d-39e6049ab999_large/cat-enjoying-nature-stockcake.jpg"
    ),
     new FaceSnap(
      "Chien",
      "voici la description",
      new Date(),
      5,
      "https://images.stockcake.com/public/a/e/3/ae30806b-a3c5-468f-a3af-daa8e0155189_large/majestic-lion-sunset-stockcake.jpg"
    ),
    new FaceSnap(
      "loup",
      "voici la description pour les loup",
      new Date(),
      20,
      "https://images.stockcake.com/public/c/7/f/c7f54972-1142-4c12-82d6-79208c9798f5_large/wolf-family-bonding-stockcake.jpg"
    ),
    new FaceSnap(
      "Elephants",
      "voici la description pour l'mage",
      new Date("12/02/2022"),
      275,
      "https://images.stockcake.com/public/1/5/e/15e6125a-e9cf-4cf9-866a-a6a992bad1b9_large/balancing-elephant-act-stockcake.jpg"
    )
    ];
    this.faceSnaps[1].setLocation('à médina');
  }
}
