import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-3">
      <div className="bg-black rounded-xl p-3 w-12 h-12 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round">
          {/* Computer/Tech connector design */}
          <rect x="2" y="4" width="8" height="2" rx="1" />
          <rect x="2" y="10" width="8" height="2" rx="1" />
          <rect x="14" y="7" width="8" height="2" rx="1" />
          <circle cx="4" cy="5" r="1" fill="white" />
          <circle cx="8" cy="5" r="1" fill="white" />
          <circle cx="4" cy="11" r="1" fill="white" />
          <circle cx="8" cy="11" r="1" fill="white" />
          <circle cx="16" cy="8" r="1" fill="white" />
          <circle cx="20" cy="8" r="1" fill="white" />
          <path d="M8 5h6l-2 3" />
          <path d="M8 11h6l-2-3" />
          <circle cx="4" cy="18" r="1" fill="white" />
          <circle cx="8" cy="18" r="1" fill="white" />
          <path d="M4 12v5" />
          <path d="M8 12v5" />
        </svg>
      </div>
      <div className="flex flex-col">
        <div className="text-lg font-bold tracking-wide text-foreground">
          TECH TOWN
        </div>
        <div className="text-xs font-medium text-gray-500 tracking-wider">
          COMPUTER SERVICE
        </div>
      </div>
    </Link>
  );
};
