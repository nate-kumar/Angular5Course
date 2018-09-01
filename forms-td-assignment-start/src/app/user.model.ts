export class User {
    email: string;
    subscription: string;
    password: string;

    constructor (email, subscription, password) {
        this.email = email;
        this.subscription = subscription;
        this.password = password;
    }

}
