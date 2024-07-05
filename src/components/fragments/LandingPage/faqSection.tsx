const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-10">
      <div className="flex items-center justify-center w-full h-full">
        <div className="container justify-between block w-11/12 md:w-3/4 md:flex">
          <div className="w-full space-y-4 text-center md:w-1/3 md:text-start">
            <h1 className="text-2xl font-bold text-black">
              Frequently Asked Question
            </h1>
            <p className="text-sm font-light text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="w-full mt-6 space-y-4 md:w-2/4 md:mt-0">
            <div className="relative overflow-hidden border rounded-lg shadow-sm">
              <input
                type="checkbox"
                className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
              />
              <div className="flex h-12 md:w-full w-[90%] items-center pl-5 md:my-0 my-2">
                <h1 className="text-sm font-light">
                  Apa saja syarat yang dibutuhkan?
                </h1>
              </div>
              <div className="absolute my-2 transition-transform duration-500 -rotate-90 right-3 top-3 peer-checked:rotate-90 md:my-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-40">
                <div className="p-5 border-t">
                  <p className="text-sm font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate iure quod odio ipsam! Natus dolorem ea laudantium
                    vitae sit nulla, aut tempore possimus error maiores.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden border rounded-lg shadow-sm">
              <input
                type="checkbox"
                className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
              />
              <div className="flex h-12 md:w-full w-[80%] items-center pl-5 md:my-0 my-2">
                <h1 className="text-sm font-light">
                  Berapa hari minimal sewa mobil lepas kunci?
                </h1>
              </div>
              <div className="absolute my-2 transition-transform duration-500 -rotate-90 right-3 top-3 peer-checked:rotate-90 md:my-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-40">
                <div className="p-5 border-t">
                  <p className="text-sm font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate iure quod odio ipsam! Natus dolorem ea laudantium
                    vitae sit nulla, aut tempore possimus error maiores.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden border rounded-lg shadow-sm">
              <input
                type="checkbox"
                className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
              />
              <div className="flex h-12 w-[90%] items-center pl-5 md:my-0 my-2">
                <h1 className="text-sm font-light">
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </h1>
              </div>
              <div className="absolute my-2 transition-transform duration-500 -rotate-90 right-3 top-3 peer-checked:rotate-90 md:my-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-40">
                <div className="p-5 border-t">
                  <p className="text-sm font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate iure quod odio ipsam! Natus dolorem ea laudantium
                    vitae sit nulla, aut tempore possimus error maiores.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden border rounded-lg shadow-sm">
              <input
                type="checkbox"
                className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
              />
              <div className="flex h-12 w-[80%] items-center pl-5 md:my-0 my-2">
                <h1 className="text-sm font-light">
                  Apakah Ada biaya antar-jemput?
                </h1>
              </div>
              <div className="absolute my-2 transition-transform duration-500 -rotate-90 right-3 top-3 peer-checked:rotate-90 md:my-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-40">
                <div className="p-5 border-t">
                  <p className="text-sm font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate iure quod odio ipsam! Natus dolorem ea laudantium
                    vitae sit nulla, aut tempore possimus error maiores.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden border rounded-lg shadow-sm">
              <input
                type="checkbox"
                className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
              />
              <div className="flex h-12 w-[80%] items-center pl-5 md:my-0 my-2">
                <h1 className="text-sm font-light">
                  Bagaimana jika terjadi kecelakaan?
                </h1>
              </div>
              <div className="absolute my-2 transition-transform duration-500 -rotate-90 right-3 top-3 peer-checked:rotate-90 md:my-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-40">
                <div className="p-5 border-t">
                  <p className="text-sm font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate iure quod odio ipsam! Natus dolorem ea laudantium
                    vitae sit nulla, aut tempore possimus error maiores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
