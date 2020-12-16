class Person {
    name: string;
    surname: string;
    private id: number;

    constructor(name: string, surname: string, id: number) {
        this.name = name;
        this.surname = surname;
        this.id = id;
    }
}

let user = new Person('Ivan', 'Ivanov', 1);



interface MyUser {
    name: string;
    id: number;
    status?: boolean;
}

let user1: MyUser;
user1 = {
    name: 'Ivan',
    id: 1
}



enum Status {
    admin = 10,
    moderator,
    user
}