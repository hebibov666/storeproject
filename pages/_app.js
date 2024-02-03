import "@/styles/globals.css";
import { Provider } from "react-redux";
import {SessionProvider} from "next-auth/react"
import store from "./react-redux/store";
export default function App({ Component,
   pageProps:{session,...pageProps} }) {
  return <SessionProvider session={session}>
     <Provider store={store}>
  <Component {...pageProps} />;
  </Provider>
  </SessionProvider>
 
}
