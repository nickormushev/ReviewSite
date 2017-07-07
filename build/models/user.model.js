"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require("./base.model");
var User = (function (_super) {
    __extends(User, _super);
    function User(id, Username, EMail, Birthdate, Gender, Admin, hash, code, Password, ConfirmPassword) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.Username = Username;
        _this.EMail = EMail;
        _this.Birthdate = Birthdate;
        _this.Gender = Gender;
        _this.Admin = Admin;
        _this.hash = hash;
        _this.code = code;
        _this.Password = Password;
        _this.ConfirmPassword = ConfirmPassword;
        return _this;
    }
    User.FromModel = function (obj) {
        var id = obj.id || obj._id;
        var Username = obj.Username;
        var EMail = obj.EMail;
        var Birthdate = obj.Birthdate;
        var Gender = obj.Gender;
        var Hash = obj.hash;
        var Code = obj.code;
        var Admin = obj.Admin;
        return new User(id, Username, EMail, Birthdate, Gender, Admin, Hash, Code);
    };
    User.ToModel = function (obj) {
        return {
            Username: obj.Username,
            EMail: obj.EMail,
            Birthdate: obj.Birthdate,
            Gender: obj.Gender,
            hash: obj.hash,
            code: obj.code,
            Admin: obj.Admin
        };
    };
    return User;
}(base_model_1.BaseModel));
exports.User = User;
;
