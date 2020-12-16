var Person = /** @class */ (function () {
    function Person(name, surname, id) {
        this.name = name;
        this.surname = surname;
        this.id = id;
    }
    return Person;
}());
var user = new Person('Ivan', 'Ivanov', 1);
var user1;
user1 = {
    name: 'Ivan',
    id: 1
};
var Status;
(function (Status) {
    Status[Status["admin"] = 10] = "admin";
    Status[Status["moderator"] = 11] = "moderator";
    Status[Status["user"] = 12] = "user";
})(Status || (Status = {}));
