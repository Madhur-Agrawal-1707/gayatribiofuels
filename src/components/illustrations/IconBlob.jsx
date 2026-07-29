import Icon from "../ui/Icon.jsx";

/**
 * An organic blob shape (rather than a plain circle/square) behind each
 * icon — a small, consistent nod to "liquid" that reinforces the subject
 * without being literal on every single card.
 */
export default function IconBlob({ icon, tone = "emerald" }) {
  const fill = tone === "gold" ? "url(#blobGold)" : "url(#blobEmerald)";

  return (
    <div className="relative h-14 w-14">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="blobEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0FA981" />
            <stop offset="100%" stopColor="#6FDDBF" />
          </linearGradient>
          <linearGradient id="blobGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E39F2E" />
            <stop offset="100%" stopColor="#F0B857" />
          </linearGradient>
        </defs>
        <path
          d="M31.6,-40.5C42.4,-33.6,53.9,-25.9,58.9,-15.1C63.8,-4.3,62.1,9.6,55.6,20.6C49.2,31.6,37.9,39.6,25.9,46.6C13.9,53.5,1.1,59.3,-11.9,58.6C-24.9,57.9,-38.1,50.7,-46.8,40C-55.6,29.2,-59.9,14.6,-59.5,0.3C-59.1,-14.1,-53.9,-28.1,-44.5,-35.5C-35.1,-42.9,-21.4,-43.7,-8.5,-42.7C4.5,-41.7,20.9,-47.4,31.6,-40.5Z"
          transform="translate(50 50)"
          fill={fill}
          opacity="0.15"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-soft ${
            tone === "gold" ? "bg-grad-gold" : "bg-grad-emerald"
          }`}
        >
          <Icon name={icon} size={20} />
        </span>
      </div>
    </div>
  );
}
