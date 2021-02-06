import { AxiosResponse } from 'axios';
import { Attribute } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}



export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps>  = new Sync('http://localhost:3000/users');
    public attribute: Attribute<UserProps>;

    constructor(attrs: UserProps) {
        this.attribute = new Attribute<UserProps>(attrs )
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attribute.get;
    }


    set(update: UserProps): void {
        this.attribute.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.attribute.get('id');
        if(typeof id !== 'number') {
            throw new Error('Cannot fetch withou an id')
        }
        this.sync.fetch(id).then((response: AxiosResponse): void=>{
            this.set(response.data)
        })
    }

    save(): void {
        this.sync.save(this.attribute.getAll())
        .then((response: AxiosResponse): void => {
            this.trigger('save')
        }).catch(()=> {
            this.trigger('error')
        })
    }
}