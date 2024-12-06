import Link from 'next/link';

export default function Header() {
  return (
    <Link href="/" className="overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
          <div className="sm:flex sm:justify-center sm:items-center text-center sm:text-start">
            <div className="shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
              <div className="flex justify-center -space-x-3 ">
                <img
                  className="border inline-block size-[128px] rounded-full ring-2 ring-white dark:ring-neutral-900"
                  src="/deep-track-ai/img/logo1.png"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-neutral-200">
              Discovering new music with generative AI
            </p>
            <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200">
              Deep Track <span className="text-blue-custom">AI</span>
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
