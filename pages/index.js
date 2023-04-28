import Link from 'next/link'
import Navbar from '../components/navbar'
import Head from 'next/head';
import { getPosts } from '../lib/posts';

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: {posts}
    }
}


function HomePage(props){
    const {posts} = props;
    return(
        <>
        <Head>
        <title>My Blog</title>
        <meta name="desciption" value="This is my blog" />
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                    {/* <li>
                        <Link href="/posts/first-post">
                            First Post
                        </Link>
                    </li> */}
                    {posts.map(post => (
                        <li>
                            <Link href={`/posts/${post.slug}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}

export default HomePage;