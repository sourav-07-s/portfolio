import { useEffect, useRef, useState } from "react";
import { Check, Palette } from "lucide-react";

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

export default function PalettePicker({ palette, setPalette }) {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef(null);
  useEffect(() => {
    const onPointerDown = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target))
        setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  return (
    <div className="palette-picker" ref={pickerRef}>
      <button
        className="palette-toggle"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Choose website color combination"
        aria-expanded={open}
        aria-haspopup="dialog"
        title="Choose color combination"
      >
        <Palette size={16} />
        <span
          className="palette-current-dot"
          style={{
            background:
              paletteOptions.find((option) => option.id === palette)?.color ||
              paletteOptions[0].color,
          }}
        />
      </button>
      {open && (
        <div
          className="palette-popover"
          role="dialog"
          aria-label="Website color combinations"
        >
          <div className="palette-popover-heading">
            <div>
              <strong>Color studio</strong>
              <small>Choose your accent palette</small>
            </div>
            <span>05 OPTIONS</span>
          </div>
          <div className="palette-options">
            {paletteOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`palette-option ${palette === option.id ? "selected" : ""}`}
                onClick={() => {
                  setPalette(option.id);
                  setOpen(false);
                }}
                aria-pressed={palette === option.id}
              >
                <span
                  className="palette-swatch"
                  style={{ "--swatch": option.color }}
                >
                  <i />
                  <i />
                  <i />
                </span>
                <span className="palette-option-copy">
                  <strong>{option.name}</strong>
                  <small>{option.note}</small>
                </span>
                {palette === option.id && (
                  <Check size={15} className="palette-check" />
                )}
              </button>
            ))}
          </div>
          <p className="palette-footnote">
            Your choice is saved on this device.
          </p>
        </div>
      )}
    </div>
  );
}
