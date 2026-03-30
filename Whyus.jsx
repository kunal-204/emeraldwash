import React from "react";

const Whyus = () => {
  const features = [
    { title: "Fabric Safe Cleaning", desc: "Gentle care for all fabric types" },
    { title: "Hygienic Processing", desc: "Sanitized and germ-free cleaning" },
    { title: "On-Time Delivery", desc: "Quick turnaround guaranteed" },
    { title: "Eco-friendly Detergents", desc: "Safe for you and the environment" },
    { title: "Free Pickup & Delivery", desc: "Convenient doorstep service" },
    { title: "24/7 Support", desc: "Always here to help you" },
  ];

  const steps = [
    { title: "Schedule Pickup", desc: "Book online or call us to schedule a convenient pickup time" },
    { title: "We Collect", desc: "Our team picks up your laundry from your doorstep" },
    { title: "We Clean", desc: "Professional cleaning with eco-friendly products" },
    { title: "We Deliver", desc: "Fresh, clean clothes delivered back to you" },
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the best laundry service with our commitment to quality and convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  ⭐
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and convenient laundry service in 4 easy steps
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-lg transform hover:scale-110 transition duration-300 text-white text-2xl font-bold">
                      {i + 1}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>

\                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <div className="absolute top-12 left-[12.5%] w-[25%] h-0.5 bg-gradient-to-r from-emerald-600 to-emerald-300"></div>
              <div className="absolute top-12 left-[37.5%] w-[25%] h-0.5 bg-gradient-to-r from-emerald-600 to-emerald-300"></div>
              <div className="absolute top-12 left-[62.5%] w-[25%] h-0.5 bg-gradient-to-r from-emerald-600 to-emerald-300"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whyus;