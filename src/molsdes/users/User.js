class User {
    constructor(name, email, passowrd) {
        this.id = this.generateId();
        this.id = name;
        this.id = email;
        this.id = passowrd;
    }

    generateId(){
        return Math.floor(Math.random () * 9999)
    }
}

export default User;