"use client";
import { useState, useEffect } from "react";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";

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

  // TODO: handleScrollToView, the useEffect and the on-component calls to scroll into view should be all consolidated into a single useEfect, which should observe when is reading updated scrollinto view the element which triggered the setTheme or setSubtheme
  const handleScrollToView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (subTheme) {
      handleScrollToView(subTheme);
    }
  }, [theme, subTheme]);

  return (
    <div className="w-full flex gap-4 relative">
      <ol className="sidenav border-r pr-4">
        {Object.keys(presentations).map((key) => (
          // themes:
          <li key={key}>
            <button
              className={`${
                reading === presentations[key]
                  ? "text-accent"
                  : theme === key
                  ? "text-secondary"
                  : ""
              }`}
              onClick={() => {
                setTheme(key);
                setSubTheme(null);
              }}
            >
              {key}
            </button>
            {/* subthemes:*/}
            {theme === key && presentations[key].subtheme && (
              <ol className="ml-2 mt-1 flex flex-col gap-1">
                {Object.keys(presentations[key].subtheme).map((subKey) => (
                  <li key={subKey}>
                    <button
                      className={`${
                        reading === presentations[key].subtheme[subKey]
                          ? "text-accent"
                          : ""
                      }`}
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
      <div className="flex flex-col gap-8 border-secondary w-max">
        {/* Title bar: */}
        <a href={reading.link} className="flex justify-center gap-2 text-xl">
          <h3>{reading.title}</h3>
          {reading.link.includes("github") ? (
            <BrandGithub />
          ) : (
            <BrandLinkedin />
          )}
        </a>
        {/* paragraphs */}
        <div>
          <div className="flex flex-col gap-2 indent-4">
            {Object.keys(reading.content).map((key) => (
              <p key={key} id={key}>
                {reading.content[key]}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ol className="sidenav border-l pl-4">
        {Object.keys(reading.content).map((key) => (
          <li key={key}>
            {/* TODO: if the content this button points to is the one currently being viewed it should have "text-accent"*/}
            <button onClick={() => handleScrollToView(key)}>{key}</button>
          </li>
        ))}
      </ol>
    </div>
  );
}