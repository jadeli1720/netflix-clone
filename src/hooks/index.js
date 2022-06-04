import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {

  //TODO: We don't want all the data (i.e. apiKey, authDomain...) in local storage. How do we set only certain items in local storage and not all of it. What items are needed on which are not


  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser)
      } else {
        localStorage.removeItem('authUser');
        setUser(null)
      }
    })

  
    return () => listener
  }, [firebase]);
  

  return { user };
}

