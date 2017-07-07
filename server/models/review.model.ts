import { BaseModel } from "./base.model";
export class Review extends BaseModel {

    static FromModel(obj: any): Review {
        const id = obj.id || obj._id;
        const userId = obj.userId;
        const type = obj.type;
        const imgUrl = obj.imgUrl;
        const headline = obj.headline;
        const hook = obj.hook;
        const review = obj.review;
        const author = obj.author;
        const score = obj.score;
        const date = obj.date;

        return new Review(id, userId, type, imgUrl, headline, hook, review, author, score, date);
    }

    static ToModel(obj: Review): any {
        return {
            type: obj.type,
            userId: obj.userId,
            imgUrl: obj.imgUrl,
            headline: obj.headline,
            hook: obj.hook,
            review: obj.review,
            author: obj.author,
            score: obj.score,
            date: obj.date,
        };
    }

    constructor(public id: string,
        public userId: string,
        public type: string,
        public imgUrl: string,
        public headline: string,
        public hook: string,
        public review: string,
        public author: string,
        public score: string,
        public date: Date
    ) { super(); }

}
