import NavBar from "./components/NavBar";
import { DownloadCV, GetInTouch } from "./components/Buttons";

export default function App() {
  return (
    <>
      <div className="font-inter bg-gray-900">
        <NavBar />
        <section className="px-6 py-20">
          <div className="flex justify-around ">
            <div className="flex flex-col justify-center max-w-xl">
              <h1 className="text-text-color-white text-5xl font-bold">
                Hi, my name is
                <span className="bg-gradient-to-r from-green-200 to-blue-400 text-transparent bg-clip-text font-caveat text-6xl">
                  &nbsp;Rasmus
                </span>
              </h1>
              <h3 className="text-slate-400 mt-8 text-2xl">
                I am a self-taught frontend developer and i love building
                beautiful user interfaces.
                <br /> I have an non-technological academic background but
                decided to make a change of path in my professional life. Read
                more about my story{" "}
                <a
                  href="#"
                  className="bg-gradient-to-r from-green-200 to-blue-400 text-transparent bg-clip-text"
                >
                  <strong>here</strong>
                </a>
                .
              </h3>
              <div className="flex gap-x-4 mt-4">
                {[
                  [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                    "html icon",
                  ],
                  [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                    "css3 icon",
                  ],

                  [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                    "javascript icon",
                  ],
                  [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                    "react.js icon",
                  ],
                  [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                    "tailwind css icon",
                  ],
                  [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                    "git icon",
                  ],
                ].map(([url, alt]) => (
                  <img
                    key={url}
                    src={url}
                    alt={alt}
                    className="w-10 h-auto rounded-sm"
                  />
                ))}
              </div>
              <div className="flex mt-6 gap-x-7">
                <GetInTouch />
                <DownloadCV />
              </div>
            </div>
            <div className="gradient-mask-l-[transparent,rgba(0,0,0,.5)_100px,rgba(0,0,0,0.9)_50%] rounded-full">
              <img
                src="/img/rasmus.jpg"
                alt="image of rasmus"
                className="w-128 rounded-full"
              />
            </div>
          </div>
        </section>
        <section className="flex justify-center bg-slate-800 px-6 py-20 h-fit">
          <div className="flex flex-col items-center max-w-2xl">
            <h1 className="text-text-color-white text-3xl font-bold">About</h1>
            <img
              src="/img/rainbow-waves.png"
              alt="multicolor rainbow waves"
              className="opacity-70 max-w-xs"
            />
            <h3 className="text-slate-400 text-2xl text-center">
              After finishing my academic studies within biology, molecular
              biology and food chemistry, I have been working more than seven
              years in the dairy industry. I have worked with smaller and larger
              projects ranging from process optimization to implementation of
              process automation on big greenfield projects.
              <br />
              <br />
              It was during my time working with process automation that i got
              extremely interested in user interface design and programming in
              general, and I wanted to find a way to learn a skill that combined
              my interest in the visual appearance of IT applications and
              learning to code as well. The answer was frontend development.
              <br />
              <br />I have been following the JavaScript path of{" "}
              <a
                href="https://www.theodinproject.com/"
                className="bg-gradient-to-r from-green-200 to-blue-400 text-transparent bg-clip-text font-bold"
                target="_blank"
              >
                The Odin Project
              </a>
              &nbsp;which is a self-paced learning journey into the world of web
              development, which will also learn you JavaScript and React.js but
              also node.js if you want to cover the full-stack curriculum.
            </h3>
            <a
              href="https://www.theodinproject.com/"
              target="_blank"
              className="mt-6"
            >
              <img
                src="/img/odin.svg"
                alt="the odin project icon"
                className="w-20 h-auto"
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
