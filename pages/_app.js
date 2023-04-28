import Navbar from '../components/navbar';

function App({Component, pageProps}){
    return (
        <>
         <header>
            <Navbar />
        </header>
        <Component {...pageProps} />
        </>
    )
}

export default App;