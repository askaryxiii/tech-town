export const ImptyCard = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet">
      <g
        fill="none"
        stroke="#D1D5DB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="18">
        <path d="M110 140 L170 120 L220 360" />
        <path d="M220 360 L520 360" strokeLinecap="round" />
      </g>

      <rect x="506" y="346" width="48" height="18" rx="9" fill="#D1D5DB" />

      <g transform="translate(210,130)">
        <rect
          x="0"
          y="0"
          width="220"
          height="220"
          rx="6"
          fill="#ffffff"
          stroke="#D1D5DB"
          strokeWidth="16"
        />

        <polygon points="0,0 24,24 196,24 220,0" fill="#d8eeff" opacity="0.4" />

        <polygon
          points="0,220 24,196 196,196 220,220"
          fill="#eaf6ff"
          opacity="0.25"
        />

        <rect
          x="28"
          y="28"
          width="164"
          height="164"
          rx="4"
          fill="#9CA3AF"
          stroke="#D1D5DB"
          strokeWidth="14"
        />

        <g fill="#6B7280" opacity="0.95">
          <rect x="46" y="36" width="18" height="148" />
          <rect x="84" y="36" width="18" height="148" />
          <rect x="122" y="36" width="18" height="148" />
        </g>

        <polygon
          points="100,36 156,36 156,188 140,188"
          fill="#6ea7de"
          opacity="0.25"
          transform="rotate(-30 120 80)"
        />
      </g>

      <g transform="translate(0,0)">
        <g transform="translate(180,420)">
          <circle
            cx="0"
            cy="0"
            r="44"
            fill="#ffffff"
            stroke="#D1D5DB"
            strokeWidth="14"
          />
          <circle cx="0" cy="0" r="20" fill="#d5dbe2" />
        </g>

        <g transform="translate(390,420)">
          <circle
            cx="0"
            cy="0"
            r="44"
            fill="#ffffff"
            stroke="#D1D5DB"
            strokeWidth="14"
          />
          <circle cx="0" cy="0" r="20" fill="#d5dbe2" />
        </g>
      </g>

      <text
        x="50%"
        y="540"
        fontFamily="Inter, Arial, Helvetica, sans-serif"
        fontSize="60"
        fontWeight="700"
        textAnchor="middle"
        fill="#333">
        No Items Found!
      </text>

      <text
        x="50%"
        y="580"
        fontFamily="Inter, Arial, Helvetica, sans-serif"
        fontSize="40"
        textAnchor="middle"
        fill="#9b9b9b">
        Sorry mate... no items found inside your cart
      </text>
    </svg>
  );
};
