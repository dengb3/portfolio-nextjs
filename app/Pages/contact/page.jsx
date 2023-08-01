import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const htmlFormElement = form.current;

    emailjs
      .sendForm(
        "service_0emnc1f",
        "template_awfvi14",
        htmlFormElement,
        "ZthsQZ5qyk1GK-fdm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex mt-5 mb-16 items-center justify-start bg-white">
      <div className="mx-auto w-full max-w-lg p-4">
        <h1 className="text-4xl font-medium">Contact Me</h1>
        <form ref={form}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="user_name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Your name"
              />
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="user_email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Your email"
              />
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="4"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Your message"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            value="send"
            className="mt-5 rounded-md bg-black px-10 py-2 text-white"
            onClick={sendEmail}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
