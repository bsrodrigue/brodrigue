import Link from "next/link";
import Image from "next/image";

interface Props {
    //   title: string;
    //   description?: string;
    //   projects: PortfolioProject[];
    articles: any;
}

const Articles: React.FC<Props> = (props: Props) => {
    //   const { title, description, projects } = props;
    const { articles } = props;
    return (
        <>
            {/* <h1>{title}</h1>
      {description && <small>{description}</small>}
      <div id="portfolio" className="grid">
      </div> */}
            {articles.map(({ slug, frontmatter }) => (
                <Link href={`/blog/articles/${slug}`} key={slug}>
                    <a >
                        <Image width={256} height={256} src={frontmatter.socialImage} alt={frontmatter.title} />
                    </a>
                </Link>
            ))}
        </>
    );
};

export default Articles;
