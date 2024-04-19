import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (idx:any) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  const datas = [
    { title: 'Adding Contacts', color: 'green', description: 'Learn how to add contacts to your list with ease. Whether it\'s clients, colleagues, or friends, we\'ve got you covered.'},
    { title: 'Managing Contacts', color: 'sky', description: 'Discover how to efficiently manage your contacts. From updating details to marking favorites, we provide the tools you need.'},
    { title: 'Contact Cards', color: 'purple', description: 'Explore the features of our contact cards. Easily view and access contact information in a visually appealing format.'},
    { title: 'Contact Updates', color: 'amber', description: 'Find out how to update contact details seamlessly. Keep your contact list up-to-date with our simple update process.'},
    { title: 'Deleting Contacts', color: 'red', description: 'Learn how to remove unwanted contacts from your list. Our deletion process ensures a smooth and hassle-free experience.'}
];

  return (
    <div className="space-y-4 py-14">
      <div className="text-center  space-y-3 mb-6">
        <h2 className="title">Frequently Asked Questions</h2>
        <p className="mt-2 subtitle">
          Here are some common questions and answers about our services.
        </p>
      </div>
      {datas.map((data, idx) => (
        <div key={idx}>
          {/* header / Title */}
          <div
            onClick={() => handleToggle(idx)}
            className={`px-4 md:px-8 py-6 ${
              idx === 0
                ? "bg-green-50 border-green-500"
                : idx === 1
                ? "bg-sky-50 border-sky-500"
                : idx === 2
                ? "bg-purple-50 border-purple-500"
                : idx === 3
                ? "bg-amber-50 border-amber-500"
                : idx === 4
                ? "bg-green-50 border-green-500"
                : "bg-orange-50 border-orange-500"
            } border-l-[3px] cursor-pointer`}
          >
            <div className="flex items-center">
              <span>
                <svg
                  className={`mr-4 ${
                    idx === 0
                      ? "fill-green-900"
                      : idx === 1
                      ? "fill-sky-900"
                      : idx === 2
                      ? "fill-purple-900"
                      : idx === 3
                      ? "fill-amber-900"
                      : idx === 4
                      ? "fill-green-900"
                      : "fill-green-900"
                  } shrink-0`}
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
              <h4
                className={`${
                  idx === 0
                    ? "text-green-900"
                    : idx === 1
                    ? "text-sky-900"
                    : idx === 2
                    ? "text-purple-900"
                    : idx === 3
                    ? "text-amber-900"
                    : idx === 4
                    ? "text-green-900"
                    : "text-green-900"
                } text-xl`}
              >
                {data.title}
              </h4>
            </div>
          </div>
          {/* body / content  */}
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div
                className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm ${
                  idx === 0
                    ? "text-green-900 bg-green-50 border-green-500"
                    : idx === 1
                    ? "text-sky-900 bg-sky-50 border-sky-500"
                    : idx === 2
                    ? "text-purple-900 bg-purple-50 border-purple-500"
                    : idx === 3
                    ? "text-amber-900 bg-amber-50 border-amber-500"
                    : idx === 4
                    ? "text-green-900 bg-green-50 border-green-500"
                    : "text-green-900 bg-green-50 border-green-500"
                }`}
              >
                {data?.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
