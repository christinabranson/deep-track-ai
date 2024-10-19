import Link from "next/link";

export default function Header() {
  return (
    <div className="max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark: ">
            Deep Track <span className="text-blue-custom">AI</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            Discovering new music with generative AI
          </p>
        </div>

        <div className="relative ms-4">
          <img
            className="w-full rounded-md"
            src="/img/logo1.png"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}
