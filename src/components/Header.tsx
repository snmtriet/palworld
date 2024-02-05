"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Navs, Languages } from "../../public/jsons";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [openBurger, setOpenBurger] = useState(false);
  const [openLanguages, setOpenLanguages] = useState(false);

  const onToggleBurger = () => setOpenBurger((prev) => !prev);
  const onToggleLanguages = () => setOpenLanguages((prev) => !prev);

  return (
    <nav className="en">
      <div className={cx("container", openBurger && "active")}>
        <Link
          aria-current="page"
          href="/"
          className={cx(
            pathname === "/" && "router-link-active router-link-exact-active"
          )}
        >
          <div className="logo">Palworld</div>
        </Link>
        <div className="burger" onClick={onToggleBurger}>
          <span />
          <span />
          <span />
        </div>
        <ul>
          {Navs.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={cx(
                  item.href === pathname &&
                    "router-link-active router-link-exact-active"
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="locales" onClick={onToggleLanguages}>
        <div className="locale-btn dropdown">
          <Image height={17} width={17} src="/images/countries/us.svg" alt="" />
          <span className="text">English</span>
        </div>
        <div
          className="locale"
          style={{ display: openLanguages ? "block" : "none" }}
        >
          {Languages.map((item) => (
            <Link key={item.title} href={item.href} className="locale-btn">
              <Image
                width={17}
                height={17}
                src={item.image}
                alt="country icon"
                loading="lazy"
              />
              <span className="text">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
