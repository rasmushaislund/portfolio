//
import { DownloadCV, GetInTouch } from "./Buttons";

export default function NavBar() {
  return (
    <nav className="bg-black-navbar py-4 px-6 flex justify-end items-center gap-x-7">
      <a
        href="https://github.com/rasmushaislund"
        className="mr-auto"
        target="_blank"
      >
        <img
          src="./icons/github-logo-white.svg"
          alt="github logo"
          className="w-8 h-auto transition-transform duration-700 ease-in-out hover:rotate-360 hover:scale-125"
        />
      </a>
      {[
        ["Home", "/#"],
        ["About", "/#"],
        ["Projects", "/#"],
      ].map(([title, url]) => (
        <a
          key={title}
          href={url}
          className="group transition-all duration-300 ease-in-out text-text-color-white font-inter font-bold py-0 px-2 border-b-[3px] border-transparent no-underline"
        >
          <span className="py-3 bg-left-bottom bg-gradient-to-r from-green-100 to-green-100 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-300 ease-out">
            {title}
          </span>
        </a>
      ))}
      <GetInTouch />
      <DownloadCV />
    </nav>
  );
}
