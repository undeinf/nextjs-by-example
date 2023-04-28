import Link from 'next/link'
import Navbar from '../components/navbar'
import Head from 'next/head';

function HomePage(){
    return(
        <>
        <Head>
        <title>My Blog</title>
        <meta name="desciption" value="This is my blog" />
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                </ul>
            </main>
        </>
    )
}

export default HomePage;