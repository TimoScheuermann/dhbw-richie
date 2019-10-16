import { Component } from '@angular/core';
import { Globals, NotificationType } from '../globals';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(
    public globals: Globals,
    private readonly questionService: QuestionService) { }

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

  setLecture(lecture: string): void {
    this.formData[3] = lecture;
    this.hideSelection();
  }

  toggleSelection() {
    if (this.selectionClass === 'showSelect') {
      this.hideSelection();
    } else {
      this.selectionClass = 'showSelect';
    }
  }

  hideSelection() {
    this.selectionClass = 'hideSelect';
  }
  onClick(event) {
    event.stopPropagation();
  }

  onInputKeyDown(event) {
    if (event.key == 'Enter') this.submitQuestion();
  }

  submitQuestion() {
    if (this.formData.filter(x => x.length < 1).length == 0) {
      this.questionService.addQuestion(Question);
      this.globals.sendNotification(
        'Deine Frage wurde eingereicht. Danke!',
        NotificationType.SUCCESS
      );

      this.formData = this.formData.map(() => '');
    } else {
      this.globals.sendNotification(
        'Bitte fülle alle Felder aus!',
        NotificationType.ERROR
      );
    }
  }
}
