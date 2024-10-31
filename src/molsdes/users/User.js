class User {
    constructor(name, email, passowrd) {
        this.id = this.generateId();
        this.name = name;
        this.email = email;
        this.password = passowrd;
    }

    generateId(){
        return Math.floor(Math.random () * 9999)
    }
}

export default User;