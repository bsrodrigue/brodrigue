import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ContactForm />
      <Footer />
      <a href="#top" className="back-to-top material-shadow">Retour au sommet</a>
    </>
  );
};

export default Layout;
