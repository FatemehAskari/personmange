import {createContext} from 'react';

const SimpleContext=createContext({
    Persons:[],
    Person:"",
    handleDeleteperson:()=>{},
    handleChangeName:()=>{},
    handleNewPerson:()=>{},
    SetName:()=>{}
});
export default SimpleContext;