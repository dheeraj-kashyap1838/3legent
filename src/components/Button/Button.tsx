import Link from "next/link";
import React from "react";
import type { Button } from "@/type/type";

interface ButtonProp {
  data: Button;
}

function Button({ data }: ButtonProp) {
  return (
    <Link
      className={`${data.radius} w-full text-center font-medium text-lg py-2.5 bg-black text-white`}
      href=""
    >
      {data.name}
    </Link>
  );
}

export default Button;
