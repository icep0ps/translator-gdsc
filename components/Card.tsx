interface CardProps {
    english: string;
    lang: string;
}

export default function Card({ lang, english }: { lang: string; english: string }) {
  return (
    <div className="bg-gray-400 p-5 rounded-lg w-80">
      <h1 className="flex items-center text-white bg-red-600 p-2 rounded-lg w-32">
        English
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        Kirundi
      </h1>
      <h2 className="mt-3 font-bold text-wrap">
        {lang}
      </h2>
      <hr className="border-b border-black" />
      <h3 className="text-gray-600 mt-3 text-wrap">
        {english}
      </h3>
    </div>
  );
}
