import "./ContactForm.css"

const ContactForm = () => {
  return (
    <section>
      <form action="POST">
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="subject" name="subject" />

        <input type="text" placeholder="message" name="message" />

        <button type="submit" className="submitBtn">Submit</button>

      </form>
    </section>
  );
};

export default ContactForm;
