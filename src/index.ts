import { User }from './models/User';

const brandNewUser = new User({id: 1, name: 'newer name', age: 0})

brandNewUser.on('save',()=> {
    console.log(brandNewUser);
});

brandNewUser.save();