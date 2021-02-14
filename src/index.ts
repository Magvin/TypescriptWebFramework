import { UserEdit } from './views/UserEdit';
import { User } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps } from './models/User';

// const user = User.buildUser({name: 'NAME', age: 20})
// const userEdit = new UserEdit(document.getElementById('root'), user);

// userEdit.render();
const userCollection = new Collection('http://localhost:3000/users',(json: UserProps) => {
    return User.buildUser(json);
})

userCollection.on('change',() => {
    const root = document.getElementById('root');

    if(root) {
        new UserList(root, userCollection).render()
    }
})
userCollection.fetch();