import React from "react";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";
import type { BreadCrumb } from "@/type/type";

interface BreadProp {
  data: BreadCrumb[];
}

function BreadCrumb({ data }: BreadProp) {
  return (
    <section className="pt-4">
      <div
        className="container mx-auto flex flex-wrap gap-4 font-medium text-sm"
        id="breadCrumb"
      >
        {data.map((elem, id) => {
          return (
            <Link
              key={id}
              href={elem?.url}
              className={`flex font_inter leading-6 text_primary items-center gap-2 ${elem?.class}`}
            >
              {elem?.label}
              <div id="breadIcon">
                <GoChevronRight />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default BreadCrumb;
