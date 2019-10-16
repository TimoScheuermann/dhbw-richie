import { Lecture } from './lecture.model';
import { User } from './user.model';

export class Question {
    _id: string;

    question: string;

    answer: string;

    comment: string;

    lecture: Partial<Lecture>;

    isReviewed: boolean;

    creationDate: Date; // Automatisch

    reviewDate: Date; // Automatisch

    updateDate: Date; // Automatisch

    creator: Partial<User>; // Username

    modifier: Partial<User>; // lastModifiedBy, ...

    archived: boolean;

    constructor({ _id, question, answer, comment, lecture, isReviewed, creationDate, reviewDate, updateDate, creator, modifier, archived }: Partial<Question>) {

        this._id = _id;
        this.question = question;
        this.answer = answer;
        this.comment = comment;
        this.lecture = lecture;
        this.isReviewed = isReviewed;
        this.creationDate = creationDate;
        this.reviewDate = reviewDate;
        this.updateDate = updateDate;
        this.creator = creator;
        this.modifier = modifier;
        this.archived = archived;
    }
}