import { Provider, useDispatch } from "react-redux"
import Body from "./components/Body"
import Header from "./components/Header"
import AppStore from "./utils/AppStore"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./utils/Firebase"
import { addUser, removeUser } from "./utils/UserSlice"
import { useEffect } from "react"
const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user sign in / sign up 
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

      } else {
        // user sign out  
        dispatch(removeUser())
      }
    })
  }, [])

}



const App = () => {

  return <div>
    <Provider store={AppStore}>
      <AppContent/>
      {/* <Header /> */}
      <Body />
    </Provider>
  </div>
}

export default App
