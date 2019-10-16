export class User {

    _id: string;
    email: string;
    username: string;
    password: string;
    isAdmin: boolean; // Rechte: isReviewer + Reviewer bestimmen, Löschen (Archivieren), evtl. Benachrichtigungen/Berichte per Mail/Inbox...
    isReviewer: boolean; // Rechte: Neue Fragen (Data) eintragen, Data reviewen & bestätigen/ablehnen (endgültig eintragen)
    constructor({ _id, email, username, password, isAdmin, isReviewer }: Partial<User>) {
        this._id = _id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
        this.isReviewer = isReviewer;
    }
}
