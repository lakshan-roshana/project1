import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

// export class HomeComponent implements OnInit {
//   words: string[] = ['Software Developer', 'Tech Enthusiast'];
//   dynamicText: string = '';
//   wordIndex: number = 0;
//   charIndex: number = 0;
//   typingSpeed: number = 50; // typing speed in milliseconds
//   erasingSpeed: number = 50; // erasing speed in milliseconds
//   delayBetweenWords: number = 1000; // delay before starting the next word

//   constructor() {}

//   ngOnInit(): void {
//     this.startTyping();
//   }

//   startTyping(): void {
//     if (this.charIndex < this.words[this.wordIndex].length) {
//       this.dynamicText += this.words[this.wordIndex].charAt(this.charIndex);
//       this.charIndex++;
//       setTimeout(() => this.startTyping(), this.typingSpeed);
//     } else {
//       setTimeout(() => this.eraseText(), this.delayBetweenWords);
//     }
//   }

//   eraseText(): void {
//     if (this.charIndex > 0) {
//       this.dynamicText = this.words[this.wordIndex].substring(0, this.charIndex - 1);
//       this.charIndex--;
//       setTimeout(() => this.eraseText(), this.erasingSpeed);
//     } else {
//       this.wordIndex = (this.wordIndex + 1) % this.words.length; // Move to the next word
//       setTimeout(() => this.startTyping(), this.typingSpeed);
//     }
//   }
// }
