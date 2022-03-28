import fs from 'fs';
import matter from 'gray-matter';
import { Articles, Section } from "../components";


export async function getStaticProps() {
  const files = fs.readdirSync('articles');

  const articles = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`articles/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);


    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      articles,
    },
  }
}

export default function Blog({ articles }) {
  return (
    <Section background="bg-white">

      <div className="wrapper">
        <Articles articles={articles} />
      </div>
    </Section>
  );
};

