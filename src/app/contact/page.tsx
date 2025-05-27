import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ContactForm from "@/components/ContactForm/ContactForm";
import ContactHeader from "@/components/ContactHeader/ContactHeader";
import ContactAbout from "@/components/SalesSection/SalesSection";
import { ContactData } from "@/data/data";
import React from "react";




function Contact() {
  return (
    <>
      <BreadCrumb data={ContactData.BreadCrumb} />
      <ContactHeader data={ContactData.ContactHeader} />
      <ContactAbout data={ContactData.ContactAbout} size='' />
      <ContactForm data={ContactData.contactForm} />

    </>
  );
}

export default Contact;
