"use client";

import Button from "./Button";
import Link from "next/link";
import { useState } from "react";



export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Courses",
      href: "/",
      dropdown: [
        {
          name: "Science Group",
          href: "/broker/option1",
        },
        {
          name: "General Group",
          href: "/broker/option2",
        },
        {
          name: "Arts Group",
          href: "/broker/option2",
        }, {
          name: "Commerce Group",
          href: "/broker/option2",
        },
      ],
    },
    {
      name: "About Us",
      href: "/about",
    },
  ];

  return (
    <header className="header">
  <nav className="nav">
    <div className="flex-container">
      <div className="title-container">
        <h1 className="title">H.N.I</h1>
      </div>

      <div className="nav-links">
        {navItems.map((nav) => (
          <div
            key={nav.name}
            className="nav-item"
            onMouseEnter={() => nav.dropdown && setShowDropdown(true)}
            onMouseLeave={() => nav.dropdown && setShowDropdown(false)}
          >
            <Link href={nav.href} className="link1">
              <p className="link">{nav.name}</p>
            </Link>

            {/* Dropdown */}
            {nav.dropdown && showDropdown && (
              <div className="dropdown">
                {nav.dropdown.map((item) => (
                  <Link key={item.name} href={item.href} className="link1">
                    <p className="dropdown-item">{item.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="contact-login">
      <Link href="/contact" className="link1">
        <p className="contact link">Contact</p>
      </Link>
      <Link href="/login">
        <p className="login-button">
          <Button className="login-btn" text="Login"/>
        </p>
      </Link>
    </div>
  </nav>
</header>
  );
}
