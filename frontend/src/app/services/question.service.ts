import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionComponent } from '../question/question.component';

@Injectable()
export class QuestionService {

    constructor(private readonly http: HttpClient) { }

    public async getAnswers(question: string) {
        return this.http.get<Question[]>('', { params: { q: question } }).toPromise();
    }

    public async addQuestion({ question, answer, quelle, vorlesung }: { question: string, answer: string, quelle: string, vorlesung: string }) {
        return this.http.post<Question>('', { question, answer, quelle, vorlesung }).toPromise();
    }

}