/* eslint-disable no-unused-vars */
import React,{useContext, useEffect} from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from '../contacts/ContactForm';
import ContactFilter from "../../context/contact/ContactFilter";
import AuthContext from '../../context/auth/AuthContext';

const Home = () => {
  const authContext=useContext(AuthContext);
  useEffect(()=>{
    authContext.loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="grid-2">
      <div>
        <ContactForm></ContactForm>

      </div>

      <div>
         <ContactFilter/>
          <Contacts></Contacts>
      </div>
    </div>
  );
};

export default Home;
