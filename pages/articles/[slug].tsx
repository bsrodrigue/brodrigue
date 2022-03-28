import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { Section } from '../../components';

export async function getStaticPaths() {
    const files = fs.readdirSync('articles');

    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`articles/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}
export default function Article({ frontmatter, content }) {
    return (
        <Section background="bg-white">
            <div className="wrapper">
                <h1 className='primary-bg material-shadow'
                    style={{
                        fontSize: '2em', fontWeight: 'bold',
                        color: 'white', textTransform: 'uppercase',
                    }}
                >{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div>
        </Section>
    );
}