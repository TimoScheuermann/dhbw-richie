import { Component } from '@angular/core';
import { NotificationType } from 'src/app/models';
import { Feedback } from 'src/app/models/feedback.model';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  constructor(public readonly notificationService: NotificationService) {
    this.feedback = {
      feedback: '',
      categorie: '',
      improvement: ''
    };
  }

  public feedback: Feedback;

  selectionChanged(selection: string): void {
    this.feedback.categorie = selection;
  }
  submitFeedback(): void {
    console.log(this.feedback);
    this.notificationService.sendNotification(
      'Vielen Dank für dein Feedback!',
      NotificationType.SUCCESS
    );
  }
}
