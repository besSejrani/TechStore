import { Provider } from 'react-redux'
import {store} from "../Redux/store"
import Layout from "../Layout/index"

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}