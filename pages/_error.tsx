import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import errorcss from "../css/_error.module.sass";

const Error: NextPage = () => {
  return (
    <div className={errorcss.background}>
      <p>
        <img src="404.gif" />
      </p>
      <nav className={errorcss.link}>
        <Link href="/">
          <a>Return home</a>
        </Link>
      </nav>
    </div>
  );
};

export default Error;
