import { Provider, useDispatch } from "react-redux"
import Body from "./components/Body"
import Header from "./components/Header"
import AppStore from "./utils/AppStore"

const App = () => {

  return <div>
    <Provider store={AppStore}>
      {/* <Header /> */}
      <Body />
    </Provider>
  </div>
}

export default App
