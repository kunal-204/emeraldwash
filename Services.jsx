import React from "react";

const Services = () => {
  const services = [
    {
      title: "Wash & Fold",
      desc: "Professional washing and neatly folded clothes delivered to your doorstep",
      price: "₹79/kg",
      image: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f",
    },
    {
      title: "Wash & Ironing",
      desc: "Crisp, wrinkle-free clothes ready to wear",
      price: "₹119/kg",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
    },
    {
      title: "Prime Wash",
      desc: "Premium care for your delicate and special garments",
      price: "₹175/kg",
      image: "https://images.unsplash.com/photo-1641642231157-0849081598a2",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of professional laundry services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-500"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-emerald-600">
                    {service.price}
                  </span>
                  <button className="bg-emerald-600 text-white px-3 py-1 rounded-full hover:bg-emerald-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;