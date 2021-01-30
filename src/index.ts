import { User }from './models/User';

const newUser = new User({name: 'Albert', age: 2});

newUser.on('change',()=> { 
});
newUser.on('change',()=> { 
});

console.log(newUser);
