import {v4 as uuid} from 'uuid';
import validator from 'validator';
import fs from 'fs';

function generateUniqueID(x,y){
    return  x.charAt(0).toLowerCase()+y.toLowerCase()+uuid().slice(0,8);   
}

export function addAccount(name,last,email,age){
    if(validator.isEmail(email)===true){
        if(validator.isEmpty(name)===false){
            if(validator.isEmpty(last)===false){
                if(age>=18){
                    let userid=name+","+last+","+email+","+age+","+generateUniqueID(name,last)+"\n";
                    fs.appendFileSync("users.txt", userid);
                    return true;
                }else{
                    console.log("Age must be 18 or above!");
                    return false;
                }
            }else{
                console.log("Last name should not be empty!");
                return false;
            }
        }else{
            console.log("Name should not be empty!");
            return false;
        }
    }else{
        console.log("Email is invalid!");
        return false;
    }
}
