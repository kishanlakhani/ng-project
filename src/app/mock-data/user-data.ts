import { ISignIn, ISignUp } from '../models/user.model';

export const SIGNUPIN:ISignIn[] = [
    {
        email:'kishan@gmail.com',
        password:'kishan'
    }
]

export const SIGNUP:ISignUp[]=[
    {
        username:'kishan',
        password:'kishan',
        cpassword:'kishan',
        birthdate:new Date().getTime(),
        email:'kishan@gmail.com',
        gender:'male',
        hobbies:['a','b','c']
    }
]