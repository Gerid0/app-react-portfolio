import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="lg:py-13 md-pl-2 xl-pl-16 xl:py-22  bg-primary py-6 pl-8 text-dark-primary dark:bg-dark-primary dark:text-primary md:px-14 md:py-12 lg:py-14 2xl:pl-28">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          <b>Get in touch</b>
        </h2>
        <p className="text-lg leading-relaxed md:max-w-2xl md:text-2xl md:leading-relaxed lg:max-w-3xl lg:text-2xl lg:leading-relaxed xl:max-w-4xl xl:text-3xl xl:leading-relaxed 2xl:max-w-4xl 2xl:text-3xl 2xl:leading-relaxed">
          Have a project you would like to discuss? Let's make something great
          together! Email me at jon.gouspy@gmail.com or use the form below to
          let me know a little more about your objectives and I'll get back to
          you.
        </p>
      </section>

      <section className="lg:py-13 md-pl-2 xl-pl-16 xl:py-22 bg-primary py-6 pl-8 text-dark-primary dark:bg-dark-primary dark:text-primary md:px-14 md:py-12 lg:py-14 2xl:pl-28">
        <div className="flex justify-center">
          <img src="./images/paper-plane.jpg" height="600" width="600" />
          <div className="rounded-r-xl bg-secondary p-20 shadow-xl dark:bg-dark-secondary">
            <form
              id="email-form"
              name="email-form"
              charset="utf-8"
              method="post"
              action="https://formspree.io/f/xbjnoraz"
            >
              <div className="pb-5 pt-5">
                <label for="full_name" className="text-xl">
                  <b>Full Name</b>
                </label>
                <div>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    required
                    className="w-80 text-dark-primary"
                  />
                </div>
              </div>
              <div className="pb-5 pt-5">
                <label for="email_address" className="text-xl">
                  <b>Email</b>
                </label>
                <div>
                  <input
                    data-validate="email"
                    aria-required="true"
                    type="email"
                    name="email_address"
                    id="email_address"
                    required
                    className="w-80 text-dark-primary"
                  />
                </div>
              </div>

              <div className="pb-5 pt-5">
                <label for="form_message" className="text-xl">
                  <b>How can I help you?</b>
                </label>
                <div>
                  <textarea
                    aria-required="true"
                    rows="3"
                    name="form_message"
                    id="form_message"
                    required=""
                    className="w-80 text-dark-primary"
                  ></textarea>
                </div>
              </div>
              <div className="pt-8">
                <button
                  id="btn-submit"
                  class="btn-solid"
                  type="submit"
                  data-validate="submit"
                  aria-label="Send message"
                  className="rounded-md bg-dark-primary p-2 text-primary dark:bg-primary dark:text-dark-primary"
                >
                  <span>Send</span>
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
