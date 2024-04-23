import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/redux-files/store";
import {SessionProvider} from "next-auth/react"
import Head from "next/head";
export default function App({ Component,
   pageProps:{session,...pageProps} }) {
  return <SessionProvider session={session}>
   <Provider store={store}>
   <Head>
   <title>Auto</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </Head>
  <Component {...pageProps} />;
   </Provider>

  </SessionProvider>
 
}
