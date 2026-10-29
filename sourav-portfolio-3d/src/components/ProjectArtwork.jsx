import { ArrowUpRight, Music2, ShoppingBag, Sparkles } from "lucide-react";

export default function ProjectArtwork({ type }) {
  if (type === "music")
    return (
      <div className="artwork artwork-music">
        <div className="artwork-top">
          <span>LIBRARY / API</span>
          <span>01—03</span>
        </div>
        <div className="vinyl">
          <div className="vinyl-center">
            <Music2 size={25} />
          </div>
        </div>
        <div className="artwork-bottom">
          <span>ROLE BASED</span>
          <span>AUTH / MEDIA</span>
        </div>
        <div className="artwork-code">{`{ routes: true, auth: 'jwt' }`}</div>
      </div>
    );
  if (type === "shop")
    return (
      <div className="artwork artwork-shop">
        <div className="shop-browser">
          <span />
          <span />
          <span />
          <b>
            shopassist<span>®</span>
          </b>
          <i>⌕</i>
        </div>
        <div className="shop-content">
          <div className="shop-copy">
            <small>CURATED FOR YOU</small>
            <strong>
              Find your
              <br />
              everyday.
            </strong>
            <span>Discover the essentials.</span>
            <div className="shop-cta">EXPLORE PRODUCTS ↗</div>
          </div>
          <div className="product-orb orb-one">
            <ShoppingBag />
          </div>
          <div className="product-orb orb-two">
            <Sparkles />
          </div>
          <div className="shop-label">SEARCH · FILTER · SAVE</div>
        </div>
      </div>
    );
  return (
    <div className="artwork artwork-tracker">
      <div className="tracker-top">
        <span>JOB HUNT / BOARD</span>
        <span>03—05</span>
      </div>
      <div className="tracker-board">
        {["WISHLIST", "APPLIED", "INTERVIEW"].map((col, i) => (
          <div className="tracker-col" key={col}>
            <b>
              <i />
              {col}
            </b>
            {Array.from({ length: i === 1 ? 3 : 2 }, (_, j) => (
              <div className="tracker-task" key={j}>
                <span />
                <span />
                <em />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="tracker-caption">
        <span>YOUR NEXT MOVE</span>
        <ArrowUpRight size={20} />
      </div>
    </div>
  );
}
const paletteOptions = [
  { id: "ember", name: "Ember", color: "#e85c3d", note: "Warm coral" },
  {
    id: "violet",
    name: "Electric Violet",
    color: "#a78bfa",
    note: "Creative + premium",
  },
  {
    id: "cyan",
    name: "Cyber Cyan",
    color: "#43d9e6",
    note: "Tech + futuristic",
  },
  {
    id: "lime",
    name: "Acid Lime",
    color: "#c4f35c",
    note: "Bold + experimental",
  },
  {
    id: "blue",
    name: "Royal Blue",
    color: "#6ea8fe",
    note: "Clean + professional",
  },
];
