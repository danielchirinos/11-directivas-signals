import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
    templateUrl: './properties-page.component.html',
    styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnInit {
    

    public counter = signal(10)

    public user = signal<User>({
        id: 1,
        email: "asd@asd.com",
        first_name: "daniel",
        last_name: "chirinos",
        avatar: "https://i1.wp.com/cloud.digitalocean.com/avatars/default7.png?ssl=1"

    })

    public fullName = computed( () => `${ this.user().first_name} ${ this.user().last_name}`)


    public userChangedEffect = effect( () => {
        console.log(`${this.user().first_name} - ${this.counter()}`);
        
    })


    ngOnInit(): void {
        // setInterval( () => {
        //     console.log("otro ");
            
        //     this.counter.update( current => current + 1);
            
        // }, 1000)
    }

    increaseBy( value: number ):void{
        this.counter.update( current => current = current + value)
    }

    onFieldUpdated( field: string, value: string ):void{

        // con set
        // this.user.set({
        //     ...this.user(), 
        //     [field]: value
        // })
        
        // con update
        // this.user.update(current => {
        //     return {
        //         ...current, 
        //         [field]: value
        //     }
        // })


        // con mutate
        this.user.mutate( current => {
            switch( field ){
                case "email":
                    current.email = value
                break;
                case "first_name":                     
                    current.first_name = value
                break;
                case "last_name":
                    current.last_name = value
                break;
                case "id":
                    current.id = Number(value)
                break;
            }
        })
        
    }


}
