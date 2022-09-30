
import { createContext, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  first_name : '',
  last_name : '',
  image_url : '',
  email : '',
  setFname: (data) => {},
  setLname: (data) => {},
  setEmail: (data) => {},
  setImage: (data) => {},
  getData: () => Object,
});

function AuthContextProvider({ children }) {










  const [authToken, setAuthToken] = useState();
  const [first_name, setFname] = useState('');
  const [last_name, setLname] = useState('');
  const [email, setemail] = useState('');
  const [image_url, setImage] = useState('');

  function SetFirstName(data) {
    setFname(data)
  }
  function SetLastName(data) {
    setLname(data)
  }
  function SetEmail(data) {
    setemail(data)
  }
  function SetImageUrl(data) {
    setImage(data)
  }


function getData(){
  data = {
    fname : first_name,
    lname : last_name,
    email : email,
    image : image_url
  }

  return data 
}



  const value = {
    setFname : SetFirstName,
    setLname : SetLastName ,
    setEmail : SetEmail,
    setImage : SetImageUrl,
    getData: getData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;