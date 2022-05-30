import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="msapplication-TileColor" content="#5000ff" />
      <meta name="theme-color" content="#5000ff" />

      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "B-Rodrigue",
  keywords: "badini rachid rodrigue portfolio burkina faso ouagadougou fullstack react kotlin mobile web backend dotnet",
  description: "My personal website and portfolio"
}

export default Meta