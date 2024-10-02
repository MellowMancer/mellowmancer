import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center px-10">
      <div className="lg:hidden flex flex-col text-start w-full pb-10">
        <h1 className="text-4xl font-sofia mb-2">Wanna Connect?</h1>
        <p>
          Feel free to reach out to me with any questions or comments you may
          have! I will do my best to respond to you as soon as possible.
        </p>
      </div>
      <div className="w-full flex justify-center items-center font-sofia">
        <ContactForm />
      </div>
      <div className="hidden lg:flex flex-col text-start w-full">
        <h1 className="text-4xl font-sofia">Wanna Connect?</h1>
        <p>
          Feel free to reach out to me with any questions or comments! I will do my best to respond as soon as possible.
        </p>
      </div>
    </div>
  );
}

export default Contact;
