import { User }from './models/User';

const brandNewUser = new User({age: 0, name: 'Just borned'})

brandNewUser.on('change',()=> {
    console.log('change')
})

brandNewUser.trigger('change')