import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSendMessage = (data) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log(data);
          toast.success("Your message has been sent successfully.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(`FAILED..., ${error.text}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div id="contact" className="bg-amber-500 py-10 px-5 md:py-12 md:px-16">
      <h1 className="text-3xl md:text-6xl font-extrabold text-center text-gray-50">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10  md:mt-5 md:gap-16">
        <div className="w-full md:w-2/4 mt-5 md:mt-10">
          <form
            ref={form}
            onSubmit={handleSubmit(handleSendMessage)}
            className="bg-white  p-5 md:p-10 rounded-lg"
          >
            <div className="mb-8">
              <h3 className="text-orange-500 text-2xl md:text-4xl font-extrabold">
                Get in Touch
              </h3>
              <p className="text-gray-500 text-sm md:text-lg font-semibold leading-relaxed">
                We're here to help you with all your JCB spare parts needs!
              </p>
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="text-gray-600 font-semibold text-sm mb-1 block"
              >
                Full Name<span className="text-red-600 ml-1">*</span>
              </label>
              <div className="relative flex items-center">
                <input
                  id="fullName"
                  type="text"
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600 placeholder:text-gray-600"
                  placeholder="Enter your Full Name"
                  {...register("fullName", {
                    required: "Full Name is required!",
                    minLength: {
                      value: 5,
                      message: "Full Name must be at least 3 characters",
                    },
                  })}
                />
              </div>
              {errors.fullName && (
                <p className="mt-2 text-red-500 text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="PhoneNumber"
                className="text-gray-600 font-semibold text-sm mt-4 block"
              >
                Phone Number<span className="text-red-600 ml-1">*</span>
              </label>
              <div className="relative flex items-center">
                <input
                  id="PhoneNumber"
                  type="tel"
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600 placeholder:text-gray-600"
                  placeholder="Enter your Phone Number"
                  {...register("PhoneNumber", {
                    required: "PhoneNumber is required!",
                    minLength: {
                      value: 10,
                      message: "Enter a valid 10 digit phone number",
                    },
                    maxLength: {
                      value: 10,
                      message: "Enter a valid 10 digit phone number",
                    },
                  })}
                />
              </div>
              {errors.PhoneNumber && (
                <p className="mt-2 text-red-500 text-xs">
                  {errors.PhoneNumber.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mt-4 text-gray-600 font-semibold text-sm mb-2 block"
              >
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  id="email"
                  type="email"
                  autoComplete="true"
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600 placeholder:text-gray-600"
                  placeholder="Enter your email"
                  {...register("email", {
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email address!",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="mt-4 text-gray-600 font-semibold text-sm mb-2 block"
              >
                Message<span className="text-red-600 ml-1">*</span>
              </label>
              <div className="relative flex items-center">
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-28 text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600 placeholder:text-gray-600"
                  placeholder="Enter your message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least of 10 characters",
                    },
                  })}
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full uppercase shadow-xl py-3 px-4 text-sm rounded-lg text-white bg-amber-500 border-2 border-amber-500 duration-300 hover:bg-transparent hover:text-amber-600 font-bold md:font-semibold tracking-wider focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="md:w-[45%] h-full">
          <iframe
            className="w-full md:h-[38rem] border border-amber-900 shadow-md shadow-gray-900/90 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1168.936889764604!2d74.86953202862281!3d34.03738566588081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1729702500009!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
