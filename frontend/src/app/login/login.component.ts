import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component copy.html',
  styleUrls: ['./login.component.css', '../search/search.component.css']
})
export class LoginComponent implements OnDestroy {
  interval: any;
  constructor(private globals: Globals, private router: Router) {
    this.startSlider();
    return;
    if (this.globals.user['signed_in']) {
      this.router.navigate(['/settings']);
      return;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startSlider() {
    this.interval = setInterval(() => {
      this.currentSlide = ++this.currentSlide % this.slides.length;
    }, 5000);
  }

  // Neue Fragen einreichen & anderen Helfen
  // Fragen favorisieren, um sie später leichter zu finden
  // Fragen bearbeiten, solltest du eine einfachere Antwort haben
  // Fragen & Antworten bewerten
  // Kommentare unter Fragen posten
  // Mit anderen <span class="gradient">Pros</span> diskutieren

  currentSlide = 0;
  slides = [
    {
      title: 'Fragen einreichen',
      subtitle:
        'Durch das einreichen neuer Fragen hilfst du deinen Kommilitonen und vergrößerst Richies Wissen',
      img: {
        background: "url('https://i.giphy.com/media/iFU36VwXUd2O43gdcr/source.gif')"
      }
    },

    {
      title: 'Fragen favorisieren',
      subtitle:
        'Hierduch kannst du ganz schnell gespeicherte Fragen abrufen und benötigst keine Lesezeichen in deinem Browser',
      img: {
        background: "url('https://i.giphy.com/media/XreQmk7ETCak0/source.gif')"
        //background: "url('https://i.giphy.com/media/awXuQy3EFjOLu/giphy.webp')"
      }
    },

    {
      title: 'Fragen bearbeiten',
      subtitle:
        'Du kennst eine verständlichere Antwort? Dann kannst du bereits existierende Fragen bearbeiten und so deinen Kommilitonen beim Lernen helfen',
      img: {
        background: "url('https://i.giphy.com/media/3o6ZsV3A5DdPm0e5bO/giphy.webp')"
      }
    },

    {
      title: 'Fragen kommentieren & diskutieren',
      subtitle:
        'Verfasse Kommentare unter Fragen und diskutiere mit deinen Kommilitonen über Lösungsansätze oder führe die Antwort weiter aus, um zu einem leichteren Verständnis beizutragen',
      img: {
        background: "url('https://i.giphy.com/media/lz67zZWfWPsWnuGH0s/source.gif')"
      }
    }
  ];
}
