export const SearchBar = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-16 py-2 border rounded-lg focus:outline-none focus:ring-0"
      />
      <span className="absolute left-3 top-2.5 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
          />
        </svg>
      </span>
    </div>
  );
};
