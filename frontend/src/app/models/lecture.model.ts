export class Lecture {

    _id: string;
    name: string;
    source: string;

    constructor({ _id, name, source }: Partial<Lecture>) {
        this._id = _id;
        this.name = name;
        this.source = source;
    }
}