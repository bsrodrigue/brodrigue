import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta/meta";

const Layout: React.FC = ({ children }) => {
  return (
    <>
    <Meta/>
      <Header />
      <main>{children}</main>
      <ContactForm />
      <Footer />
      <a href="#top" className="back-to-top material-shadow">Back to the top</a>
    </>
  );
};

export default Layout;
