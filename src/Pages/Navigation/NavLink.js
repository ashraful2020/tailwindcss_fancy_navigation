import React, { useState } from "react";
import { links } from "../routes";

const NavLink = () => {

  // <ion-icon name="chevron-up"></ion-icon>;
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => {
        return (
          <div>
            <div className="group px-3 text-left md:cursor-pointer">
              <h1
                className="flex items-center justify-between py-7 pr-5 font-bold uppercase md:pr-0"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {link.name}
                <span className="inline text-xl md:mt-1 md:ml-2 md:block group-hover:md:-mt-2 group-hover:md:rotate-180">
                  <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
              </h1>
              {link.submenu && (
                <div>
                  <div className="top-15 absolute hidden hover:md:block group-hover:md:block">
                    {/* icon */}
                    <div className="z-0 py-3">
                      <div className="absolute left-3 mt-1 h-4 w-4 rotate-45 bg-white "></div>
                    </div>
                    {/* Icon */}
                    <div className="z-50 grid grid-cols-3 gap-14 bg-white p-6">
                      {link.subLinks.map((slinks) => {
                        return (
                          <div>
                            <div>
                              <h1 className="pt-2 font-bold uppercase">
                                {slinks.Head}
                              </h1>
                              {slinks.subLink.map((mySubLink) => {
                                return (
                                  <div className="text-sm">
                                    {mySubLink.name}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* mobile menu  */}
            <div
              className={`${heading === link.name ? "md:hidden" : "hidden"}`}
            >
              {link?.subLinks?.map((slinks) => {
                return (
                  <div>
                    <div>
                      <h1
                        className="flex items-center justify-between py-4 pl-8 pr-5 text-left font-semibold uppercase md:pr-0"
                        onClick={() =>
                          subHeading !== slinks.Head
                            ? setSubHeading(slinks.Head)
                            : setSubHeading("")
                        }
                      >
                        {slinks.Head}
                        <span>
                          <ion-icon
                            name={`${
                              subHeading === slinks.Head
                                ? "chevron-up"
                                : "chevron-down"
                            }`}
                          ></ion-icon>
                        </span>
                      </h1>
                      <div
                        className={`${
                          subHeading === slinks.Head ? "md:hidden" : "hidden"
                        }`}
                      >
                        {slinks.subLink.map((sublink) => {
                          return (
                            <div>
                              <div>
                                <p className="py-3 pl-14 text-lg hover:text-blue-600">
                                  {sublink.name}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NavLink;