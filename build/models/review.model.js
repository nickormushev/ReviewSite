"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require("./base.model");
var Review = (function (_super) {
    __extends(Review, _super);
    function Review(id, userId, type, imgUrl, headline, hook, review, author, score, date) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.userId = userId;
        _this.type = type;
        _this.imgUrl = imgUrl;
        _this.headline = headline;
        _this.hook = hook;
        _this.review = review;
        _this.author = author;
        _this.score = score;
        _this.date = date;
        return _this;
    }
    Review.FromModel = function (obj) {
        var id = obj.id || obj._id;
        var userId = obj.userId;
        var type = obj.type;
        var imgUrl = obj.imgUrl;
        var headline = obj.headline;
        var hook = obj.hook;
        var review = obj.review;
        var author = obj.author;
        var score = obj.score;
        var date = obj.date;
        return new Review(id, userId, type, imgUrl, headline, hook, review, author, score, date);
    };
    Review.ToModel = function (obj) {
        return {
            type: obj.type,
            userId: obj.userId,
            imgUrl: obj.imgUrl,
            headline: obj.headline,
            hook: obj.hook,
            review: obj.review,
            author: obj.author,
            score: obj.score,
            date: obj.date
        };
    };
    return Review;
}(base_model_1.BaseModel));
exports.Review = Review;
