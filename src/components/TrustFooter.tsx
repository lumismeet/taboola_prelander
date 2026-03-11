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

        {/* Legal links */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="/privacy/policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-subtle underline hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/privacy/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-subtle underline hover:text-foreground transition-colors"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default TrustFooter;
