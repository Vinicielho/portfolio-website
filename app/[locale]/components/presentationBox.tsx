"use client";
import { useState, useEffect } from "react";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";
import Link from "next/link";

// TODO: SIMPLIFY!
export default function PresentationBox({
  presentations,
}: {
  presentations: any;
}) {
  const [theme, setTheme] = useState(Object.keys(presentations)[0]);
  const [subTheme, setSubTheme] = useState(
    presentations[theme].subtheme
      ? Object.keys(presentations[theme].subtheme)[0]
      : null
  );
  const reading = subTheme
    ? presentations[theme].subtheme[subTheme]
    : presentations[theme];

  // this should point to the content component which holds the text for this
  const handleScrollToView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // TODO: it would be intresting to have the components update only the theme and subtheme, and the state update the "reading" when one of those are updated. Or would the reading state be updated automatically already?
  useEffect(() => {
    if (subTheme) {
      // it should scroll to the element being pointed by the reading state, and it would be intresting to have it changes, instead of a trigger on every button
      handleScrollToView(subTheme);
    }
    // Observa reading?
  }, [theme, subTheme]);

  return (
    <div className="w-full flex gap-4">
      {/* left sidenav: */}
      <ol className="myBox flex flex-col">
        {Object.keys(presentations).map((key) => (
          // themes:
          <li key={key}>
            <button
              onClick={() => {
                setTheme(key);
                setSubTheme(null);
              }}
            >
              {key}
            </button>
            {/* subthemes: */}
            {theme === key && presentations[key].subtheme && (
              <ol>
                {Object.keys(presentations[key].subtheme).map((subKey) => (
                  <li key={subKey}>
                    <button
                      onClick={() => {
                        setSubTheme(subKey);
                      }}
                    >
                      {subKey}
                    </button>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
      {/* content: */}
      <div className="myBox px-4 w-max">
        {/* Title bar: */}
        <div className="flex">
          <div>{reading.title}</div>
          <Link href={reading.link}>
            {reading.link.includes("github") ? (
              <BrandGithub />
            ) : (
              <BrandLinkedin />
            )}
          </Link>
        </div>
        <div>
          {/* Content */}
          <div>
            {Object.keys(reading.content).map((key) => (
              <p key={key} id={key}>
                {reading.content[key]}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* subthemes nav */}
      {reading?.content && (
        <ol className="myBox">
          {Object.keys(reading.content).map((key) => (
            <li key={key}>
              <button onClick={() => handleScrollToView(key)}>{key}</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}