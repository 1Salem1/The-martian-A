
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
  const [image_url, setImage] = useState('https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/292935140_3211885599023602_7505630557735376089_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=akWU1RwiC0IAX_VCLIJ&_nc_ht=scontent.ftun10-1.fna&oh=00_AT_0VWDMrFSu6yGRT4wg7W7_NT441bndCYmya4QYRP-TLQ&oe=635C65BD');

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