import Film from "../../components/Film/Film";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <section>
        <section>
            <ContactForm />
        </section>
      <section>
        <Footer />
      </section>
    </section>
  );
};

export default Contact;
