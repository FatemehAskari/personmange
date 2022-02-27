import React,{useContext,useState} from "react";
import { Button } from "react-bootstrap";
import SimpleContext from "./../../Context/SimpleContex";


const NewPerson = () => {
    const context=useContext(SimpleContext);
    const [aftersubmit,setaftersubmit]=useState(false);
    const chap=()=>{
      // context.handleNewPerson();
      console.log(aftersubmit);
    }


  return (
    // <SimpleContext.Consumer>
    //   {(context) => (
        <div className="m-2 p-2">
          <form
            className="form-inline justify-content-center"
            onSubmit={(event) =>{ 
            event.preventDefault()
            setaftersubmit(true)}}
          >
            <div className="input-group w-25">
              <input
                type="text"
                placeholder="اسم بهم بده"
                className="form-control"
                onChange={context.SetName}
                value={context.Person}
              />
              <div className="input-group-prepend">
                <Button
                  variant="success"
                  className="fa fa-plus-square"
                  size="sm"
                  type="submit"
                  onClick={chap}
                />
              </div>
            </div>
          </form>
        </div>
    //   )}
    // </SimpleContext.Consumer>
  );
};

export default NewPerson;


