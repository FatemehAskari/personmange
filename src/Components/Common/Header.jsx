import React,{useContext,useEffect} from "react";
import { Alert, Badge } from "react-bootstrap";
import SimpleContext from "./../../Context/SimpleContex";

const Header = ({appTitle}) => {

  const context=useContext(SimpleContext); 
  const {Persons}=context;

  // useEffect(()=>{
  //   console.log("Header.jsx useEffect");
  //   setTimeout(()=>{
  //     alert('Data saved');

  //   },1000)
  // },[Persons])

  // useEffect(()=>{
  //   console.log("Header.jsx useEffect");
  //   setTimeout(()=>{
  //     alert('Data saved');

  //   },1000)
  // },[])



  let badgestyle = "";

  if (Persons.length <= 1) {
    badgestyle = "danger";
  } else if (Persons.length === 2) {
    badgestyle = "warning";
  } else {
    badgestyle = "success";
  }

  return (
    // <SimpleContext.Consumer>
    //   {(context) => (
        <div>
          <Alert variant="info">
            <h2>{appTitle}</h2>
          </Alert>
          {/* <h5 className='alert alert-light'>تعداد افراد <span className={`${badgestyle}`}>{persons.length}</span> نفر می باشد </h5> */}
          <Alert variant="light">
            <h5>
              تعداد افراد
              <Badge pill bg={badgestyle} text="white">
                {" " + Persons.length + " "}
              </Badge>
              نفر می باشد
            </h5>
          </Alert>
        </div>
    //   )}
    // </SimpleContext.Consumer>
  );
};

export default Header;
