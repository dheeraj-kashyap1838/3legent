import React from "react";
import Form from "next/form";
import { Content} from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";

interface FormProp {
  data: Content.ContactFormSlice;
}

function ContactForm({ data }: FormProp) {
  const { button, form_input, map } = data?.primary;
  return (
    <section className="px-6 md:pt-12 md:pb-20 py-10">
      <div className="container mx-auto">
        <div className="flex lg:flex-row gap-7 flex-col-reverse">
          <Form
            action=""
            className="max-w-[544px] flex flex-col gap-6 mx-auto w-full"
          >
            {form_input?.map((elem, id) => {
              return (
                <div key={id} className="flex flex-col gap-3">
                  <label
                    className="text_primary font_inter font-bold text-xs leading-3"
                    htmlFor={elem?.input_id as string}
                  >
                    {elem?.input_label}
                  </label>

                  {elem?.form_field === "input" && (
                    <input
                      type="text"
                      id={elem?.input_id as string}
                      placeholder={elem?.input_placeholder as string}
                      className="px-4 py-[7px] font-normal leading-[26px] font_inter rounded-md focus:outline-hidden border border-[#CBCBCB]"
                    />
                  )}
                  {elem?.form_field === "textarea" && (
                    <textarea
                      id={elem?.input_id as string}
                      placeholder={elem?.input_placeholder as string}
                      className="px-4 py-[7px] font-normal min-h-[140px] h-full resize-none leading-[26px] font_inter rounded-md focus:outline-hidden border border-[#CBCBCB]"
                    />
                  )}
                </div>
              );
            })}

            <button
              type="submit"
              className="bg-black max-w-[189px] lg:mx-0 mx-auto w-full rounded-lg text-white font_inter py-1.5 px-10 font-medium leading-7 tracking-[-0.4]"
            >
              <PrismicLink field={button} />
            </button>
          </Form>
          <div className="max-w-[548px] mx-auto w-full ">
            <iframe
              src={map as string}
              className="w-full min-h-[311px] h-full"
              title="description"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
