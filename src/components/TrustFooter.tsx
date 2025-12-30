const trustPoints = [
  "No obligation",
  "No purchase required",
];

const TrustFooter = () => {
  return (
    <footer className="px-5 py-8 md:py-10 border-t border-border">
      <div className="max-w-md mx-auto w-full">
        {/* Trust points */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-4">
          {trustPoints.map((point, index) => (
            <span 
              key={index}
              className="text-subtle text-xs"
            >
              {point}
            </span>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-subtle text-xs leading-relaxed max-w-sm mx-auto">
          We may connect you with insurance partners based on your selection.
        </p>
      </div>
    </footer>
  );
};

export default TrustFooter;
