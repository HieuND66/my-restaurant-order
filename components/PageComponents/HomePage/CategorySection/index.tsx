import Link from "next/link";
import { FC, useState, useRef, useEffect } from "react";

const CategorySection: FC = () => {
  return (
    <section className="category">
      <Link href="#" className="box">
        <img src="/image/cat-1.png" className="mx-auto" />
        <h3 className="font-semibold">combo</h3>
      </Link>
      <Link href="#" className="box">
        <img src="/image/cat-2.png" className="mx-auto" />
        <h3 className="font-semibold">pizza</h3>
      </Link>
      <Link href="#" className="box">
        <img src="/image/cat-3.png" className="mx-auto" />
        <h3 className="font-semibold">burger</h3>
      </Link>
      <Link href="#" className="box">
        <img src="/image/cat-4.png" className="mx-auto" />
        <h3 className="font-semibold">chicken</h3>
      </Link>
      <Link href="#" className="box">
        <img src="/image/cat-5.png" className="mx-auto" />
        <h3 className="font-semibold">dinner</h3>
      </Link>
      <Link href="#" className="box">
        <img src="/image/cat-6.png" className="mx-auto" />
        <h3 className="font-semibold">coffee</h3>
      </Link>
    </section>
  );
};
export default CategorySection;
