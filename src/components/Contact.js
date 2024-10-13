'use client'
import { useForm } from "react-hook-form";
import { Suspense, useEffect, useRef, useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IconContext } from "react-icons";

import { userData } from "@/lib/utils";
import Icon from "./ui/Icon";
import SocialMediaLinks from "./ui/SocialMediaLink";
import { postApiCall } from "@/lib/apiCallFonctions";
import LoadingSpin from "./ui/LoadingSpin";
import InputUI from "./ui/InputUI";
import ReCAPTCHA from "react-google-recaptcha";
import LoadingCaptcha from "./ui/LoadingCaptcha";

function Contact() {
  const [feedback, setFeedback] = useState({});
  const [isLoadingCaptcha, setIsLoadingCaptcha] = useState(true)
  const [captchaValue, setCaptchaValue] = useState(null)
  const recaptchaRef = useRef();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  
  // useEffect pour réinitialiser les messages de feedback après 5 secondes
  useEffect(() => {
    if (feedback.status === 200) {
      reset();
      recaptchaRef.current.reset();
    }
    if (feedback.message) {
      const timer = setTimeout(() => {
        setFeedback({});
      }, 5000); // 5 secondes

      return () => clearTimeout(timer); // Réinitialiser le timer si feedback change
    }
  }, [feedback, reset]);

  const onSubmit = async (data) => {    
    // appel API
    const response = await postApiCall("/api/sendMail", { ...data, captchaToken: recaptchaRef.current.getValue() });
    const { message } = await response.json();
    setFeedback({ status: response.status, message: message });
  };

  return (
    <section className="scroll-mt-10 p-4 mt-10" id="contact">
      <div className="my-5">
        <h2 className="title-blue text-3xl font-black mb-8 p-1 sm:text-5xl">Contacte-moi</h2>
        <p className="md:w-[70%] text-sm sm:text-base">Si vous avez des questions ou des préoccupations, n&apos;hésitez pas à me contacter. Je suis ouvert à toute opportunité qui correspond à mes compétences et intérêts.</p>
      </div>
      <div className="md:flex md:gap-10 md:justify-between gap-5 grid">
        <form className="grid gap-5 shadow-md shadow-gray-500 p-2 md:w-full max-w-2xl" onSubmit={handleSubmit(onSubmit)}>

          {feedback && feedback?.status > 200 && <div className="shadow-md animate-pulse shadow-red-900 text-red-700 px-4 py-3 rounded " role="alert">
            <strong className="font-bold text-inherit">{feedback?.message}</strong>
          </div>}

          {feedback && feedback?.status === 200 && <div className="shadow-md animate-pulse shadow-green-900 text-green-700 px-4 py-3 rounded" role="alert">
            <strong className="font-bold text-inherit">{feedback?.message}</strong>
          </div>}

          <InputUI id="name" type="text" labelText="Votre Nom" 
            register={{...register("name",{required: "Le nom est requis."})}}
            error={errors?.name}
          />
          <InputUI id="email" type="email" labelText="Votre E-mail" 
            register={{...register("email",{
              required: "L'e-mail est requis.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Adresse e-mail invalide."
              }
            })}}
            error={errors?.email}
          />
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm sm:text-base">Votre Message <span className="text-red-500 font-semibold">*</span></label>
            <textarea
              id="message"
              {...register("message", { required: "Le message est requis.", minLength: {
                  value: 10,
                  message: "Le message doit contenir au moins 10 caractères."
              }})}
              className="w-full bg-inherit rounded-lg border-stone-600/100 border shadow-sm shadow-stone-600/90 hover:shadow-stone-400/100 transition-shadow duration-500 focus:outline-none focus:shadow-stone-400/100 min-h-[200px] p-4"
            />
            {errors.message && <span className="text-red-500 font-semibold px-2">{errors.message?.message}</span>}
          </div>
          
          <div className="overflow-hidden">
            {isLoadingCaptcha && <LoadingCaptcha />}
            <ReCAPTCHA 
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              asyncScriptOnLoad={() => { setIsLoadingCaptcha(false); }}
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
          <button
            disabled={isSubmitting || !captchaValue} 
            type="submit"
            onClick={handleSubmit}
            className="hover:opacity-75 transition-opacity duration-500 inline-flex justify-center items-center px-6 py-4 font-semibold text-neutral-300/80 bg-blue-500/75 rounded-3xl sm:w-1/2 sm:mx-auto sm:min-w-max ">
            {isSubmitting ? (<LoadingSpin text="Envoi en cours..."/>) : 
              !captchaValue ? 
              <>
                Résolvez le Captcha <span className="ml-2 text-xl"></span>
              </>
              : "Envoyez-moi votre message"
            } 
          </button>
        </form>
        <div className="">
          <address className="grid gap-3 my-5 text-bold not-italic text-sm sm:text-base md:text-xl">
            <IconContext.Provider value={{ size: '25' }}>
              <div className="flex gap-3 items-center">
                <Icon><MdAlternateEmail fill="black"/></Icon>
                <span className="">{userData.email}</span>
              </div>
              <div className="flex gap-3 items-center">
                <Icon><MdOutlinePhoneInTalk fill="black"/></Icon>
                <span className="">{userData.phoneNumber}</span>
              </div>
              <div className="flex gap-3 items-center">
                <Icon><FaLocationDot fill="black"/></Icon>
                <span className="">{userData.adress}</span>
              </div>
            </IconContext.Provider>
          </address>
          <SocialMediaLinks size="25"/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
