import Navbar from '../components/navbar';
import "../styles/globals.css";
import Head from 'next/head';

function App({Component, pageProps}){
    return (
        <>
        <Head>
            <link rel="icon" href="/icons/favicon.ico"/>
        </Head>
         <header>
            <Navbar />
        </header>
        <Component {...pageProps} />
        </>
    )
}

export default App;