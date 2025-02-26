import {v4 as uuid} from 'uuid';
import validator from 'validator';
import fs from 'fs';

function generateUniqueID(x,y){
    return  x.charAt(0).toLowerCase()+y.toLowerCase()+uuid().slice(0,8);   
}