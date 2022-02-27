import React, { useContext } from "react";
import Person from "./Person.jsx";
import SimpleContext from "./../../Context/SimpleContex";

const Persons = () => {
    const context=useContext(SimpleContext);
  return (
    // <SimpleContext.Consumer>
    //   {(contex) => (
        <div>
          {context.Persons.map((persons) => (
            <Person
              key={persons.id}
              fullname={persons.fullname}
              deleted={() => context.handleDeleteperson(persons.id)}
              changed={(event) => context.handleChangeName(event, persons.id)}
            />
          ))}
        </div>
    //   )}
    // </SimpleContext.Consumer>
  );
};

export default Persons;
