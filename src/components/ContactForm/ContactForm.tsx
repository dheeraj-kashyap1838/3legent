import React from "react";
import type { contactForm } from "@/type/type";
// import SmallCard from "../SmallCard/SmallCard";
import Form from "next/form";

interface FormProp {
  data: contactForm;
}

function ContactForm({ data }: FormProp) {
  return (
    <section className="px-6 md:pt-12 md:pb-20 py-10">
      <div className="container mx-auto flex flex-col gap-10">
        <h1 className="text-center heading">{data.sectionTitle}</h1>
        <div className="flex md:flex-row flex-col md:gap-6 gap-4">
          {data.formCard.map((card, id) => {
            return (
              <div
                key={id}
                className="max-w-[357px]  mx-auto w-full"
              >
                {/* <SmallCard data={card} variation="Align Center" /> */}
              </div>
            );
          })}
        </div>
        <div className="flex lg:flex-row gap-7 flex-col-reverse">
          <Form action="" className="max-w-[544px] flex flex-col gap-6 mx-auto w-full">
            <div className="flex flex-col gap-3">
              <label className="text_primary font_inter font-bold text-xs leading-3"  htmlFor={data.form.name.name}>
                {data.form.name.label}
              </label>
              <input
                type={data.form.name.type}
                id={data.form.name.name}
                placeholder={data.form.name.placeholder}
                className="px-4 py-[7px] font-normal leading-[26px] font_inter rounded-md focus:outline-hidden border border-[#CBCBCB]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text_primary font_inter font-bold text-xs leading-3"    htmlFor={data.form.email.name}>
                {data.form.email.label}
              </label>
              <input
                type={data.form.email.type}
                id={data.form.email.name}
                placeholder={data.form.email.placeholder}
                className="px-4 py-[7px] font-normal leading-[26px] font_inter rounded-md focus:outline-hidden border border-[#CBCBCB]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text_primary font_inter font-bold text-xs leading-3"     htmlFor={data.form.message.name}>
                {data.form.message.label}
              </label>
              <textarea
                id={data.form.message.name}
                placeholder={data.form.message.placeholder}
                className="px-4 py-[7px] font-normal min-h-[140px] h-full resize-none leading-[26px] font_inter rounded-md focus:outline-hidden border border-[#CBCBCB]"
              />
            </div>
            <button
              type="submit"
              className="bg-black max-w-[189px] lg:mx-0 mx-auto w-full rounded-lg text-white font_inter py-1.5 px-10 font-medium leading-7 tracking-[-0.4]"
            >
              {data.form.submitButton}
            </button>
          </Form>
          <div className="max-w-[548px] mx-auto w-full ">
            <iframe src={data.map.src} className="w-full min-h-[311px] h-full" title="description"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
