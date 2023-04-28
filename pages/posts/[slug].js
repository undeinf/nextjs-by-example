import Head from 'next/head'
import {  getMarkedPost, getSlugs } from '../../lib/posts';

export async function getStaticPaths(){
    const slugs = await getSlugs();
    return{
        // paths: [
        //     {params: { slug: 'first-post' }},
        //     {params: { slug: 'second-post' }}
        // ],
        paths: slugs.map(slug => ({ 
            params: {slug}
        })),
        fallback: false,
    }
}


export async function getStaticProps(context){
    const {params: {slug}} = context
    // const post = await getPost('first-post');
    const post = await getMarkedPost(slug);
    
    return {
        props: {post}
    }
    // return {
    //     props:{
    //         post: {
    //             title: "First Post",
    //             body: "My first post, as static props"
    //         }
    //     }
    // }
}

function FirstPostPage({post}){
    const {title, body, date} = post

    return(
        <>
                <Head>
        <title>{title} - My Blog</title>
            </Head>

        <main>
            <p>{date}</p>
            <h1>{title}</h1>
            {/* <p>
                {body}
            </p> */}
            <article dangerouslySetInnerHTML={{__html: body}} />
        </main>
</>
    )
}

export default FirstPostPage;