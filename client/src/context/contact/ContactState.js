/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import contactReducer from "./ContactReducer";



import {

  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Sac Top",
        email: "sac@gmail.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "222-222-2222",
        type: "personal",
      },
      {
        id: 3,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-333-3333",
        type: "professional",
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact 

  //Delete Contact

  //Set Current Contact


  //Clear Current Contact


  //UPdate Contacat 

  //Filter Contacts

  //Clear Filter

  return (
      <ContactContext.Provider value={{contacts:state.contacts}}>
        {props.children}
      </ContactContext.Provider>
  )
};


export default ContactState;