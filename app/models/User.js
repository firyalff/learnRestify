const Database= require(`${process.env.PWD}/app/kernels/Database`);

class User extends Database.Model {  
    get tableName() {
        return 'users';
    }

    get hasTimestamps() {
        return true;
    }

    verifyPassword(password) {
        return this.get('password') === password;
    }

    static byEmail(email) {
        return this.forge().query({where:{ email: email }}).fetch();
    }
}

class Users extends Database.Collection {
    get model() {
        return User;
    }
}

module.exports= {
    model: User,
    collection: Users
}