import React, { useState } from "react";

const Pricing = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pricingData = [
    {
      title: "Men's Wear",
      items: [
        ["Shirt / T-Shirt / Kurta", 79, 9],
        ["Jeans / Trouser", 89, 9],
        ["Trouser (Heavy)", 120, 15],
        ["Shorts", 49, 9],
        ["Kurta + Pyjama", 165, 14],
        ["Dhoti", 99, 9],
        ["Coat", 259, 129],
        ["Suit (2 Pc)", 349, 169],
      ],
    },
    {
      title: "Women's Wear",
      items: [
        ["Top / Salwar / Palazzo", 60, 15],
        ["Saree (Plain)", 165, 25],
        ["Saree (Silk)", 220, 49],
        ["Saree (Designer)", 350, 65],
        ["Coat", 259, 99],
        ["Skirt (S / M / L)", "149 / 169 / 199", 49],
        ["Gown (S / M / L)", "249 / 349 / 449", 49],
        ["Jeans", 89, 9],
        ["Shirt", 79, 9],
      ],
    },
    {
      title: "Household Items",
      items: [
        ["Bedsheet (Single)", 149, 20],
        ["Bedsheet (Double)", 199, 30],
        ["Blanket (Single)", 299, "N/A"],
        ["Blanket (Double)", 399, "N/A"],
        ["Curtains (Medium / Large)", "100 / 140", 50],
        ["Door Curtains (M / L)", "149 / 179", 70],
        ["Cushion Cover (S / M / L)", "59 / 85 / 125", "20 / 30 / 50"],
        ["Carpet", "₹30 per sq.ft", "-"],
      ],
    },
    {
      title: "Winter Wear",
      isComingSoon: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Pricing
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent and affordable pricing for all your laundry needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {pricingData.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between px-6 py-4 hover:bg-emerald-50"
              >
                <span className="text-xl font-bold">{category.title}</span>
                <span>{openIndex === idx ? "▲" : "▼"}</span>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-4 overflow-x-auto">
                  {category.isComingSoon ? (
                    <p className="text-gray-600 py-4">Coming soon...</p>
                  ) : (
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-emerald-100">
                          <th className="text-left py-3">Item</th>
                          <th className="text-right py-3">Dry Clean (₹)</th>
                          <th className="text-right py-3">Steam (₹)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((row, i) => (
                          <tr key={i} className="border-b hover:bg-emerald-50">
                            <td className="py-3">{row[0]}</td>
                            <td className="py-3 text-right text-emerald-600">{row[1]}</td>
                            <td className="py-3 text-right text-emerald-600">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;