const items = [
  "ICON MAJESTIC TARGET",
  "CIDPROTECH GROUP LTD",
  "SAHL WORKS INTEGRATED LIMITED",
  "BLUE APPLE HOTEL LTD",
  "INTELLIPATH PROPERTIES LIMITED",
  "STERLING TRUST COMPANY",
  "TRAVIS HAULAGE SERVICE",
  "BLACKNATION FARMS LTD",
  "EVERYTHING4HIRE",
  "ROZANS GLOBAL SERVICES",
];

export default function CompStack() {
  return (
    <div className="w-[75%] mx-auto overflow-hidden font-kreon pt-5 text-[#0060C6]">
      <div className="flex w-max animate-marquee gap-10">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="shrink-0 text-2xl font-semibold whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}