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
    public sync: Sync<UserProps>  = new Sync('http://localhost:3000');
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
}