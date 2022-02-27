import React, { useState } from "react";
import Persons from "./Components/Person/Persons.jsx";
import { Alert, Button, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from "./Components/Common/Header.jsx";
import SimpleContext from "./Context/SimpleContex.js";
import NewPerson from "./Components/Person/NewPerson.jsx";
import Radium from "radium";

const App = () => {
  // state = {
  //   persons: [],
  //   person: "",
  //   ShowPerson: true,
  //   appTitle:"مدیریت اشخاص "
  // };

  const [getPersons, setPersons] = useState([]);
  const [getSinglePerson, setSinglePerson] = useState("");
  const [getShowPerson, setShowPerson] = useState(true);

  const handleShowPerson = () => {
    setShowPerson(!getShowPerson);
  };
  const handleDeleteperson = (id) => {
    const persons = [...getPersons];
    const filterperson = persons.filter((p) => p.id !== id);
    setPersons(filterperson);
    const persoindex = persons.findIndex((p) => p.id === id);
    const person1 = persons[persoindex];
    toast.error(`${person1.fullname} حذف شد`, {
      position: "bottom-right",
      closeButton: true,
      closeOnClick: true,
    });
  };
  const handleChangeName = (event, id) => {
    const Allperson = [...getPersons];
    const personIndex = Allperson.findIndex((p) => p.id === id);
    const person = Allperson[personIndex];
    person.fullname = event.target.value;
    Allperson[personIndex] = person;
    setPersons(Allperson);
  };
  const handleNewPerson = () => {
    const newperson = [...getPersons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: getSinglePerson,
    };
    if (person.fullname !== "" && person.fullname !== " ") {
      newperson.push(person);
      setPersons(newperson);
      setSinglePerson("");
      toast.success("شخص اضافه شد.", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true,
      });
    } else {
      toast.error("باید اسم وارد کنی.", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true,
      });
    }
  };
  const SetName = (event) => {
    setSinglePerson(event.target.value);
  };

  let person = null;
  if (getShowPerson) {
    person = <Persons />;
  }

  // const btnStyle = {
  //   ":hover":{color: "red",backgroundColor: "black"}
  // };
  // if (getShowPerson) {
  //   btnStyle[":hover"] = { color: "blue", backgroundColor: "black" };
  // }

  return (
    <SimpleContext.Provider
      value={{
        Persons: getPersons,
        Person: getSinglePerson,
        handleNewPerson: handleNewPerson,
        handleDeleteperson: handleDeleteperson,
        handleChangeName: handleChangeName,
        SetName: SetName,
      }}
    >
      <div className="rtl text-center">
        <Header appTitle="مدیریت اشخاص" />
        <NewPerson />

        <Button
        onClick={handleShowPerson}
        variant={getShowPerson ? "info" : "danger"}
      >
        نمایش اشخاص
      </Button>

        {/* <button
          onClick={handleShowPerson}
          style={{
            ":hover": {
              color: "red",
              backgroundColor: "black",
            },
          }}
        >
          نمایش اشخاص
        </button> */}

        {/* <button onClick={handleShowPerson} style={btnStyle}>نمایش اشخاص</button> */}


        {person}
        <ToastContainer />
      </div>
    </SimpleContext.Provider>
  );
};

export default App;
