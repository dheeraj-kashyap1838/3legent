import React from "react";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";
import type { BreadCrumb } from "@/type/type";

interface BreadProp {
  data: BreadCrumb[];
}

function BreadCrumb({ data }: BreadProp) {
  return (
    <section className="px-6 pt-[72px]" id="breadCrumb">
      <div className="container mx-auto flex gap-4 font-medium text-sm">
        {data.map((elem, id) => {
          return (
            <Link key={id} href={elem?.url} className={`flex font_inter leading-6 text_primary items-center gap-2 ${elem?.class}`}>
              {elem?.label}
              <GoChevronRight />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default BreadCrumb;
