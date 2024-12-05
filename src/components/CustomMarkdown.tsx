import ReactMarkdown from 'react-markdown';

const CustomMarkdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ node, ...props }) => (
          <a
            className="text-blue-600 underline underline-offset-4 decoration-blue-600 hover:opacity-80 focus:outline-none focus:opacity-80"
            {...props}
          />
        ),
        hr: ({ node, ...props }) => (
          <hr className="my-5 text-sm md:text-base lg:text-lg" {...props} />
        ),
        p: ({ node, ...props }) => <p className="my-5" {...props} />,
        img: ({ node, ...props }) => (
          <img
            className="w-full object-cover rounded-xl border border-gray-200"
            {...props}
          />
        ),
        blockquote: ({ node, ...props }) => {
          return (
            <blockquote className="relative">
              <svg
                className="absolute -top-6 -start-8 size-16 text-gray-100 dark:text-neutral-700"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                ></path>
              </svg>

              <div className="relative z-10">
                <span
                  className="text-gray-800 text-xl dark:text-white custom-italics"
                  {...props}
                ></span>
              </div>
            </blockquote>
          );
        },

        ul: ({ node, ...props }) => (
          <ul
            className="my-5 marker:text-blue-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-neutral-400"
            {...props}
          />
        ),
        ol: ({ node, ...props }) => (
          <ol
            className="my-5 list-decimal list-inside ps-5 space-y-2 text-sm text-gray-600 dark:text-neutral-400"
            {...props}
          />
        ),

        h1: ({ node, ...props }) => (
          <h2 className="my-5 text-4xl font-semibold	" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h3 className="text-3xl font-semibold	" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h4 className="text-2xl font-semibold	" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h5 className="text-xl font-semibold	" {...props} />
        ),
        h5: ({ node, ...props }) => (
          <h6 className="text-lg font-semibold	" {...props} />
        ),
        h6: ({ node, ...props }) => (
          <h6 className="my-5 text-base font-semibold	" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default CustomMarkdown;
