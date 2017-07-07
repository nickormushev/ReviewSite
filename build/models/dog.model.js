"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require("./base.model");
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(id, imgUrl) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.imgUrl = imgUrl;
        return _this;
    }
    Dog.FromModel = function (obj) {
        var id = obj.id || obj._id;
        var imgUrl = obj.imgUrl;
        return new Dog(id, imgUrl);
    };
    Dog.ToModel = function (obj) {
        return {
            id: obj.id,
            imgUrl: obj.imgUrl
        };
    };
    return Dog;
}(base_model_1.BaseModel));
exports.Dog = Dog;
