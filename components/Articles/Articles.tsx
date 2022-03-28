import { ContentInformation } from "../../interfaces";
import ContentCard from "../ContentCard";
interface Props {
    articles: any;
}

const Articles: React.FC<Props> = (props: Props) => {
    const { articles } = props;
    return (
        <>
            <h1>Articles</h1>
            <div id="portfolio" className="grid">
                {articles.map(({ slug, frontmatter }) => {
                    const articleContent: ContentInformation = {
                        title: frontmatter.title,
                        description: "",
                        cover: frontmatter.socialImage,
                        link: `/articles/${slug}`,
                    }

                    return (
                        <ContentCard key={slug} content={articleContent} />
                    )
                })}
            </div>
        </>
    );
};

export default Articles;
