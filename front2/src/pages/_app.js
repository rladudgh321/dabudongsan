import wrapper from '@/store/configureStore';
import '@/styles/style.css';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

const App = ({Component}) => {
  return (
    <>
      <Component />
    </>
  );
}

export default wrapper.withRedux(App);