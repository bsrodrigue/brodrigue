import React from "react";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.REACT_APP_NOTION_ACCESS_TOKEN });

async function foo() {
  try {

    const myPage = await notion.databases.query({
      database_id: process.env.REACT_APP_NOTION_BLOG_DATABASE_ID
    });

    console.log(myPage);
  } catch (error) {
    console.error(error);
  }
}




const BlogPage: React.FC = () => {
  foo();
  return (
    <>
      <div className="wrapper">
        <p>Empty for now</p>
      </div>
    </>
  );
};

export default BlogPage;
