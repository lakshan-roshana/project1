import { Component,ElementRef,ViewChild ,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-texttest',
  standalone: true,
  imports: [],
  templateUrl: './texttest.component.html',
  styleUrl: './texttest.component.css'
})
export class TexttestComponent implements AfterViewInit {
  private words = [' Software Developer ', ' Angular Developer ', ' Cybersecurity Enthusiast '];
  private typingSpeed = 100; // Milliseconds per character
  private deletingSpeed = 100; // Milliseconds per character
  private delayBetweenWords = 1000; // Milliseconds before switching to the next word

  ngAfterViewInit() {
    this.startTyping();
  }

  private startTyping() {
    const typingElement = document.querySelector('.typing-effect') as HTMLElement;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = this.words[wordIndex];
      const displayedText = isDeleting
        ? currentWord.substring(0, charIndex--)
        : currentWord.substring(0, charIndex++);

      typingElement.textContent = displayedText;

      if (!isDeleting && charIndex === currentWord.length) {
        // Pause before deleting
        isDeleting = true;
        setTimeout(type, this.delayBetweenWords);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % this.words.length;
        setTimeout(type, 500); // Short pause before typing the next word
      } else {
        // Continue typing or deleting
        setTimeout(type, isDeleting ? this.deletingSpeed : this.typingSpeed);
      }
    };

    type();
  }
}




























// import { Component,AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'app-texttest',
//   standalone: true,
//   imports: [],
//   templateUrl: './texttest.component.html',
//   styleUrl: './texttest.component.css'
// })
// // export class TexttestComponent {

// // }


// export class TexttestComponent implements AfterViewInit {
//   private words = ['Software Developer', 'Angular Developer', 'Cybersecurity Enthusiast'];
//   private typingSpeed = 100; // Milliseconds per character
//   private deletingSpeed = 100; // Milliseconds per character
//   private delayBetweenWords = 1000; // Milliseconds before switching to the next word

//   ngAfterViewInit() {
//     this.startTyping();
//   }

//   private startTyping() {
//     const typingElement = document.querySelector('.typing-effect') as HTMLElement;
//     let wordIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;

//     const type = () => {
//       const currentWord = this.words[wordIndex];
//       const displayedText = isDeleting
//         ? currentWord.substring(0, charIndex--)
//         : currentWord.substring(0, charIndex++);

//       typingElement.textContent = displayedText;

//       if (!isDeleting && charIndex === currentWord.length) {
//         // Pause before deleting
//         isDeleting = true;
//         setTimeout(type, this.delayBetweenWords);
//       } else if (isDeleting && charIndex === 0) {
//         // Move to the next word
//         isDeleting = false;
//         wordIndex = (wordIndex + 1) % this.words.length;
//         setTimeout(type, 500); // Short pause before typing the next word
//       } else {
//         // Continue typing or deleting
//         setTimeout(type, isDeleting ? this.deletingSpeed : this.typingSpeed);
//       }
//     };

//     type();
//   }
// }