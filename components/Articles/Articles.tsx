import { ContentInformation } from "../../interfaces";
import ContentCard from "../ContentCard";

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
            <div id="portfolio" className="grid">
                {articles.map(({ slug, frontmatter }) => {
                    const content: ContentInformation = {
                        title: frontmatter.title,
                        description: "",
                        cover: frontmatter.socialImage,
                        link: slug,
                    }

                    return (
                        <ContentCard key={slug} content={content} />
                    )
                })}
            </div>
        </>
    );
};

export default Articles;
