import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Globals, NotificationType } from '../globals';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.startSearch();
    // }, 20);
  }
  constructor(
    public globals: Globals,
    private readonly questionService: QuestionService) {

    /*for (let i = 0; i < 35; i++) {
      let question_addition = '';
      let answer_addition = '';
      for (let x = 0; x < Math.random() * 200; x++) {
        question_addition += Math.random()
          .toString(36)
          .substring(7);
      }
      for (let x = 0; x < Math.random() * 200; x++) {
        answer_addition += Math.random()
          .toString(36)
          .substring(7);
      }

      this.results.push({
        id: 82938290839,
        likes: 142,
        dislikes: 39,
        question: '1 mod x = 2' + question_addition,
        answer: 'Rel. ez. 1+1 = 2' + answer_addition
      });
    }*/
  }

  selectionStyle: any = { opacity: 0.7 };
  selectionClass: string = 'hideSelect';
  formData = ['', '', '', ''];
  lectures = [
    'Einführung IT',
    'Logik & Algebra',
    'Finanzmathe',
    'Programmieren I',
    'Programmieren II',
    'Bilanzierung',
    'Vertrags-Recht',
    'Was auch immer',
    'soll mir das',
    'Backend schicken'
  ];

  searchQuery = '';
  results: Question[] = [];

  resultsWrapper = {
    'max-height': '0px',
    'overflow': 'hidden',
    'display': 'none'
  };
  landingWrapperStyle = {
    top: '50%'
  };
  landingStyle = {
    'min-height': '100vh'
  };
  overlayStyle = { display: 'none' };
  cardStyle = { animation: 'none' };
  isSearching = false;
  searchResultElements = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(event = null) {
    if (this.searchResultElements === null || this.searchResultElements.length == 0)
      return;

    this.searchResultElements.forEach(element => {
      let positionFromTop = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
      if (positionFromTop - windowHeight <= 0 && !element.classList.contains('come-in')) {
        element.classList.add('come-in');
      }
    });
    this.searchResultElements = this.searchResultElements.filter(
      element => !element.classList.contains('come-in')
    );
  }

  // setLecture(lecture: string): void {
  //   this.formData[3] = lecture;
  //   this.hideSelection();
  // }

  // toggleSelection() {
  //   if (this.selectionClass === 'showSelect') {
  //     this.hideSelection();
  //   } else {
  //     this.selectionClass = 'showSelect';
  //   }
  // }

  // hideSelection() {
  //   this.selectionStyle.opacity = 0;
  //   this.selectionStyle.transform = 'scale(0)';
  // }

  // onClick(event) {
  //   event.stopPropagation();
  // }

  onInputKeyDown(event, question: string) {
    if (event.key == 'Enter') this.startSearch(question);
  }

  // openUserCard() {
  //   console.log("Das Pop UPp öffnet sich!")
  //   this.overlayStyle = {
  //     display: 'block'
  //   };
  //   this.cardStyle = {
  //     animation: 'overlay-animation 0.4s linear both'
  //   };
  // }

  // closeUserCard() {
  //   console.log('close');
  //   this.overlayStyle = { display: 'none' };
  //   this.cardStyle = { animation: 'none' };
  //   this.hideSelection();
  // }

  // acceptQuestion() {
  //   this.globals.sendNotification('Dein Feedback wurde eingereicht!', NotificationType.SUCCESS);
  //   this.closeUserCard;
  // }
  // deleteQuestion() {
  //   this.globals.sendNotification('Dein Feedback wurde gelöscht!', NotificationType.SUCCESS);
  //   this.closeUserCard;
  // }

  async startSearch(question: string) {
    if (this.isSearching) return;
    this.isSearching = true;
    this.results = await this.questionService.getAnswers(question);

    setTimeout(() => {
      this.globals.sendNotification(
        `Die Suche ergab folgende Treffer`,
        NotificationType.SUCCESS
      );
      this.landingStyle['min-height'] = '268.667px';
      this.landingStyle['margin-bottom'] = '-50px';
      this.landingWrapperStyle.top = '124.334px';
      this.resultsWrapper.display = 'block';
      this.resultsWrapper['max-height'] = 'unset';
      this.isSearching = false;
      this.searchResultElements = Array.from(
        document.querySelectorAll('.questionanswer')
      ).slice(0);
      setTimeout(() => {
        this.onScroll();
      }, 700);
    }, 1500 * 1);
  }
}
