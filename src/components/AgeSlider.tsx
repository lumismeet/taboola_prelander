import { useState } from "react";

const AGE_MESSAGES: { range: [number, number]; message: string; color: string }[] = [
  { range: [16, 25], message: "Young drivers typically pay the highest rates. Comparing quotes could save you the most!", color: "text-red-500" },
  { range: [26, 35], message: "You're entering the sweet spot — rates start dropping. See how much you can save.", color: "text-orange-500" },
  { range: [36, 50], message: "Experienced drivers often qualify for better rates. Don't miss out — compare now.", color: "text-yellow-600" },
  { range: [51, 64], message: "Mature drivers are among the safest on the road. You may qualify for loyalty discounts.", color: "text-green-600" },
  { range: [65, 85], message: "Senior discounts are available from many insurers. A quick compare could unlock savings.", color: "text-blue-600" },
];

export default function AgeSlider({ onCtaClick }: { onCtaClick: () => void }) {
  const [age, setAge] = useState(35);

  const getMessage = () => {
    return AGE_MESSAGES.find(({ range }) => age >= range[0] && age <= range[1]);
  };

  const msg = getMessage();

  // Calculate position for the bubble (0% to 100%)
  const percent = ((age - 16) / (85 - 16)) * 100;

  return (
    <section className=" relative w-full flex justify-center py-14 bg-white border border-slate-200 rounded-2xl shadow-sm px-8 my-12">
      <div className="max-w-2xl mx-auto text-center space-y-6">

        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
          How Old Are You?
        </h2>
        <p className="text-slate-500 text-base">
          Your age is one of the biggest factors in your car insurance rate.
        </p>

        {/* Age display */}
        <div className="text-6xl font-black text-[#128CED]">
          {age}
          <span className="text-2xl font-semibold text-slate-400 ml-1">yrs</span>
        </div>

        {/* Slider */}
        <div className="relative px-2">
          {/* Bubble above thumb */}
          <div
            className="absolute -top-8 flex justify-center w-8 transition-all duration-100"
            style={{ left: `calc(${percent}% - 16px)` }}
          >
            <div className="bg-[#128CED] text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {age}
            </div>
          </div>

          <input
            type="range"
            min={16}
            max={85}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full h-3 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #128CED ${percent}%, #e2e8f0 ${percent}%)`,
            }}
          />

          {/* Min / Max labels */}
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>16</span>
            <span>85+</span>
          </div>
        </div>

        {/* Age group label */}
        <div className="text-sm font-semibold text-slate-500 tracking-wide uppercase">
          {age <= 25 && "Young Driver"}
          {age >= 26 && age <= 35 && "Young Adult"}
          {age >= 36 && age <= 50 && "Middle-Aged Driver"}
          {age >= 51 && age <= 64 && "Experienced Driver"}
          {age >= 65 && "Senior Driver"}
        </div>

        {/* Dynamic message */}
        {msg && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-left">
            <p className={`text-base font-semibold ${msg.color} mb-1`}>
              Based on your age ({age}):
            </p>
            <p className="text-slate-600 text-base">{msg.message}</p>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className="w-full bg-[#128CED] hover:bg-blue-500 text-white font-black py-4 rounded-sm text-lg transition shadow-md"
        >
          Check My Rate →
        </button>       

        <p className="text-xs text-slate-400">Free • No obligation • No spam calls</p>
      </div>

      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #128CED;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #128CED;
        }

        
        input[type='range']::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #128CED;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #128CED;
        }
      `
      }</style>
    </section>
  );
}