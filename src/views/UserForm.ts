import { User, UserProps } from "../models/User";
import { View } from './View';

export class UserForm extends View<User, UserProps> {
    

    eventsMap(): { [key: string]: ()=> void } {
        return {
            'click:.set-name': this.onSetNameClick,
            'click:.set-age': this.onSetAgeClick,
            'click:.save-model': this.onSaveClick,
        }
    }
    
    onSaveClick = ():void => {
        this.model.save()
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    onSetNameClick =(): void => {
     const input = this.parent.querySelector('input');

     this.model.set({name: input.value});        
    }

    template(): string {
        return `
            <div>
            <input type="text" value='${this.model.get('name')}  '/>
            <button class='set-name'>Update Name</button>
            <button class='set-age'> Set Random Age </button>
            <button class='save-model'> Save User </button>
            </div>
         `
    }

}