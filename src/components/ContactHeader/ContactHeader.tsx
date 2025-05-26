import React from "react";
import type { ContactHeader } from "@/type/type";

interface ContactProp {
  data: ContactHeader;
}

function ContactHeader({ data }: ContactProp) {
  return (
    <section className="px-6 pt-10 pb-12" >
      <div className="container mx-auto flex flex-col gap-6 ">
          <h3 className="max-w-[834px] w-full font-medium md:text-[54px] text-[28px] md:leading-[54px] leading-[34px] tracking-[-1px]">{data.heading}</h3>
          <p className="max-w-[834px] w-full font-normal  leading-6 font_inter">{data.description}</p>
      </div>
    </section>
  );
}

export default ContactHeader;
