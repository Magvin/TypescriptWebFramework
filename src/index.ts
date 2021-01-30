import { User }from './models/User';

const newUser = new User({name: 'Albert', age: 2});

console.log(newUser.get('name'));

newUser.set({age:3});
console.log(newUser.get('age'))