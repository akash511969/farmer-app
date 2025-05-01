import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const mandiRates = [
  { commodity: "Apple", kg: "₹85.0", quintal: "₹8500.0" },
  { commodity: "Banana", kg: "₹25.5", quintal: "₹2550.0" },
  { commodity: "Bhindi (Ladies Finger)", kg: "₹41.67", quintal: "₹4167.0" },
  { commodity: "Bitter Gourd", kg: "₹43.0", quintal: "₹4300.0" },
  { commodity: "Bottle Gourd", kg: "₹30.0", quintal: "₹3000.0" },
  { commodity: "Brinjal", kg: "₹16.0", quintal: "₹1600.0" },
  { commodity: "Cabbage", kg: "₹6.5", quintal: "₹650.0" },
  { commodity: "Capsicum", kg: "₹17.0", quintal: "₹1700.0" },
  { commodity: "Carrot", kg: "₹13.0", quintal: "₹1300.0" },
  { commodity: "Cauliflower", kg: "₹14.67", quintal: "₹1467.0" },
  { commodity: "Coriander (Leaves)", kg: "₹20.0", quintal: "₹2000.0" },
  { commodity: "Cucumber (Kheera)", kg: "₹16.0", quintal: "₹1600.0" },
  { commodity: "French Beans (Frasbean)", kg: "₹18.0", quintal: "₹1800.0" },
  { commodity: "Garlic", kg: "₹53.0", quintal: "₹5300.0" },
  { commodity: "Ginger (Dry)", kg: "₹33.5", quintal: "₹3350.0" },
  { commodity: "Grapes", kg: "₹55.0", quintal: "₹5500.0" },
  { commodity: "Green Chilli", kg: "₹27.0", quintal: "₹2700.0" },
  { commodity: "Guava", kg: "₹43.0", quintal: "₹4300.0" },
  { commodity: "Karbuja (Musk Melon)", kg: "₹37.0", quintal: "₹3700.0" },
  { commodity: "Mousambi (Sweet Lime)", kg: "₹37.0", quintal: "₹3700.0" },
  { commodity: "Onion", kg: "₹22.33", quintal: "₹2233.0" },
  { commodity: "Papaya", kg: "₹37.0", quintal: "₹3700.0" },
  { commodity: "Pomegranate", kg: "₹73.0", quintal: "₹7300.0" },
  { commodity: "Potato", kg: "₹12.13", quintal: "₹1213.0" },
  { commodity: "Tomato", kg: "₹20.75", quintal: "₹2075.0" },
  { commodity: "Wheat", kg: "₹24.25", quintal: "₹2425.0" }
];

const categorizedData = {
  "🌾 Crops": [
    {
      id: 1,
      question: "ਗੰਹੂੰ ਦੀ ਵਧੀਆ ਕਿਸਮ ਕੀ ਹੈ?",
      answer: "PBW 725 ਅਤੇ HD 3086 ਪੰਜਾਬ ਵਿੱਚ ਉਤਮ ਗੰਹੂੰ ਦੀਆਂ ਕਿਸਮਾਂ ਹਨ।",
      image: "https://example.com/images/wheat.jpg"
    }
  ],
  "💧 Irrigation": [
    {
      id: 2,
      question: "ਟਪਕ ਸਿੰਚਾਈ ਦੇ ਫਾਇਦੇ ਕੀ ਹਨ?",
      answer: "ਇਸ ਨਾਲ ਪਾਣੀ ਦੀ ਬਚਤ ਹੁੰਦੀ ਹੈ ਅਤੇ ਸਿੱਧਾ ਰੂਟਸ ਤੱਕ ਪਹੁੰਚਦਾ ਹੈ।",
      image: "https://example.com/images/drip.jpg"
    }
  ],
  "🧪 Fertilizers & Pesticides": [
    {
      id: 3,
      question: "ਯੂਰੀਆ ਦੀ ਠੀਕ ਮਾਤਰਾ ਕਿੰਨੀ ਹੈ?",
      answer: "ਪੱਖੀ ਤੌਰ 'ਤੇ 45-60 ਕਿਲੋ/ਏਕੜ, ਪਰ ਮਿੱਟੀ ਦੀ ਜਾਂਚ ਜਰੂਰੀ ਹੈ।"
    }
  ],
  "🌦️ Weather": [
    {
      id: 4,
      question: "ਮੌਸਮ ਜਾਣਕਾਰੀ ਲਈ ਇਥੇ ਜਾਓ",
      answer: "Weather forecast and agromet information is available here.",
      link: "https://sbbsuniversity.ac.in/agromet.php"
    }
  ],
  "🐄 Livestock": [
    {
      id: 5,
      question: "ਪਸ਼ੂਆਂ ਲਈ ਵਧੀਆ ਚਾਰਾ ਕੀ ਹੈ?",
      answer: "ਹਰਾ ਚਾਰਾ, ਚੂਨੀ, ਤੇ ਨਿਯਮਤ ਪਾਣੀ ਉਨ੍ਹਾਂ ਦੀ ਸਿਹਤ ਲਈ ਜ਼ਰੂਰੀ ਹਨ।"
    }
  ],
  "📑 Government Schemes": [
    {
      id: 6,
      question: "PM-Kisan ਯੋਜਨਾ ਕੀ ਹੈ?",
      answer: "ਇਸ ਯੋਜਨਾ ਹੇਠ ਕਿਸਾਨਾਂ ਨੂੰ ₹6000 ਸਾਲਾਨਾ ਮਿਲਦੇ ਹਨ।"
    }
  ],
  "💰 Loans & Insurance": [
    {
      id: 7,
      question: "ਕਿਸਾਨ ਕਰਜ਼ਾ ਛੁਟਕਾਰਾ ਸਕੀਮ ਕੀ ਹੈ?",
      answer: "ਇਹ ਸਕੀਮ ਅਮਲ ਵਿੱਚ ਹੈ ਜੋ ਕੁਝ ਨਿਯਮਾਂ ਅਧੀਨ ਕਰਜ਼ਾ ਮਾਫ ਕਰਦੀ ਹੈ।"
    }
  ],
  "⚠️ Disease & Pest Control": [
    {
      id: 8,
      question: "ਚਿੜੀ ਦੀ ਬਿਮਾਰੀ ਤੋਂ ਬਚਾਅ ਕਿਵੇਂ ਕਰੀਏ?",
      answer: "ਨਿਯਮਤ ਛਿੜਕਾਅ ਤੇ ਖੇਤ ਦੀ ਸਫਾਈ ਜਰੂਰੀ ਹੈ।"
    }
  ],
  "🏪 Mandi Rates": [
    {
      id: 9,
      question: "ਅੱਜ ਦੀ ਮੰਡੀ ਵਿੱਚ ਭਾਅ ਕੀ ਹਨ?",
      answer: "ਹੇਠਾਂ ਦਿੱਤੇ ਅਨੁਸਾਰ ਹਨ:",
      table: true
    }
  ]
};

export default function Chatbot() {
  const [selectedQA, setSelectedQA] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const handleCategoryClick = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  const handleQuestionClick = (qa) => {
    setSelectedQA((prev) => (prev === qa ? null : qa));
  };

  const handleTableClick = () => {
    setShowTable((prev) => !prev);
  };

  const handleWeatherClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <Sparkles /> ਪੰਜਾਬ ਕਿਸਾਨ ਚੈਟਬੋਟ
      </h1>

      {Object.entries(categorizedData).map(([category, qas]) => (
        <div key={category} className="w-full max-w-2xl mb-6">
          <Button
            onClick={() => handleCategoryClick(category)}
            className="w-full text-left justify-start text-xl font-semibold text-green-700 bg-white hover:bg-green-200"
          >
            {category}
          </Button>

          {openCategory === category && (
            <div className="space-y-2 mt-2">
              {qas.map((qa) => (
                <div key={qa.id}>
                  <Button
                    className="w-full text-left justify-start bg-white text-green-800 hover:bg-green-200"
                    onClick={() => {
                      if (qa.link) {
                        handleWeatherClick(qa.link); // Open the weather URL
                      } else {
                        handleQuestionClick(qa);
                      }
                    }}
                  >
                    ❓ {qa.question}
                  </Button>

                  {selectedQA === qa && !qa.link && (
                    <div className="ml-4 mt-2">
                      <p className="font-semibold text-green-700 text-lg">✅ {qa.answer}</p>
                      {qa.image && (
                        <img
                          src={qa.image}
                          alt="related visual"
                          className="mt-4 rounded-xl w-full max-h-64 object-cover"
                        />
                      )}
                      {qa.table && (
                        <>
                          <Button
                            onClick={handleTableClick}
                            className="w-full text-left justify-start bg-white text-green-800 hover:bg-green-200"
                          >
                            📊 Commodity Rates Today In Punjab
                          </Button>
                          {showTable && (
                            <table className="table-auto w-full mt-4 border border-green-300">
                              <thead className="bg-green-200">
                                <tr>
                                  <th className="border px-2 py-1">Commodity</th>
                                  <th className="border px-2 py-1">Kg Price</th>
                                  <th className="border px-2 py-1">Quintal Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {mandiRates.map((item, index) => (
                                  <tr key={index} className="text-center">
                                    <td className="border px-2 py-1">{item.commodity}</td>
                                    <td className="border px-2 py-1">{item.kg}</td>
                                    <td className="border px-2 py-1">{item.quintal}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
