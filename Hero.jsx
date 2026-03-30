import React from "react";

const Hero = () => {
  const handleBookNow = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id="home" className="pt-28 bg-gradient-to-b from-emerald-100 to-white/90 p-10 min-h-screen">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                Up to 30% OFF
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get Your Clothes Washed With Just One Touch
            </h2>

            <p className="text-xl text-gray-700">Where Care Meets Convenience</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleBookNow}
                className="inline-flex items-center justify-center gap-2 font-medium shadow h-12 bg-emerald-600 text-white px-8 rounded-full text-lg transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-xl"
              >
                Book Now - Starting @ ₹9
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 w-5 h-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>

              <button className="inline-flex items-center justify-center gap-2 font-medium h-12 border-2 border-emerald-600 text-emerald-600 bg-white rounded-full px-8 text-lg transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-700 hover:scale-105 hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 w-5 h-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Us
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-emerald-600"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
                <span className="text-sm text-gray-600">100% Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-emerald-600"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
                <span className="text-sm text-gray-600">Free Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-emerald-600"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="text-sm text-gray-600">Quick Service</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                alt="Professional Laundry Service"
                className="w-full h-75 md:h-100 object-cover rounded-2xl"
                src="https://images.pexels.com/photos/4386143/pexels-photo-4386143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-emerald-50 to-amber-50 opacity-10 rounded-2xl"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-emerald-600"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path>
                    <path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path>
                    <path d="M5 18H3"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Starting at</p>
                  <p className="text-2xl font-bold text-emerald-600">₹9</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;