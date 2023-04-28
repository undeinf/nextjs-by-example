import {readFile, readdir} from 'fs/promises'
import {marked} from 'marked';
import matter from 'gray-matter';

// export async function getPost(slug){
//     const data = await readFile(`content/posts/${slug}.json`, "utf8")
//     return JSON.parse(data || "{}");
// }

export async function getMarkedPost(slug){
    const source = await readFile(`content/posts/${slug}.md`,"utf8");
    const {data: {date, title}, content} = matter(source);
    const html = marked(content);
    return { title, date, body: html }
}

export async function getPosts(){
    const slugs = await getSlugs();
    const posts = [];
    for(const slug of slugs){
        const post = await getMarkedPost(slug);
        posts.push({slug, ...post});
    }

    return posts;
}

export async function getSlugs(){
    const suffix = '.md'
    const files = await readdir('content/posts');
    return files
        .filter(file => file.endsWith(suffix))
        .map(file => file.slice(0, -suffix.length));

}