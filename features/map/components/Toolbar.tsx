"use client";

type ToolbarProps = {
  onShowHotels: () => void;
};

export default function Toolbar({ onShowHotels }: ToolbarProps) {
  return (
    <div className="mb-4 flex justify-end">
      <button
        onClick={onShowHotels}
        className="rounded-xl bg-[#027C8C] px-5 py-3 font-medium text-white transition hover:bg-[#036673]"
      >
        🏨 عرض الفنادق
      </button>
    </div>
  );
}
