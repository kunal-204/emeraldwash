import React from "react";

const Header = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-emerald-700 text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              emerald<span className="text-amber-400">wash</span>
            </h1>
            <p className="text-xs text-gray-200">Where Care Meets Convenience</p>
          </div>
        </div>

        <div className="hidden md:flex gap-3 bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-lg">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "home")}
            className="px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-emerald-700 hover:translate-x-1 hover:shadow-md cursor-pointer"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "services")}
            className="px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-emerald-700 hover:translate-x-1 hover:shadow-md cursor-pointer"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, "pricing")}
            className="px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-emerald-700 hover:translate-x-1 hover:shadow-md cursor-pointer"
          >
            Pricing
          </a>
          <a
            href="#whyus"
            onClick={(e) => handleSmoothScroll(e, "whyus")}
            className="px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-emerald-700 hover:translate-x-1 hover:shadow-md cursor-pointer"
          >
            Why Us
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-emerald-700 hover:translate-x-1 hover:shadow-md cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;