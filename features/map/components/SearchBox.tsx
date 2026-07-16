"use client";

type SearchBoxProps = {
  onSearch: (value: string) => void;
};

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get("location")?.toString().trim();
    console.log("Search value:", e.currentTarget.location.value);
    if (!value) return;

    onSearch(value);
  };

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      className="mx-auto mb-6 flex md:min-w-2xl md:max-w-5xl items-center gap-3 rounded-2xl border border-[#B8E3E8] bg-white p-3 shadow-lg"
    >
      <input
        name="location"
        placeholder="ابحث عن مدينة أو مكان..."
        className="flex-1 rounded-xl bg-[#F8FCFC] px-5 py-3 text-[#014B55] outline-none transition-all duration-300 placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-[#027C8C]/20"
      />

      <button
        type="submit"
        className="rounded-xl bg-[#027C8C] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#036673] hover:shadow-xl active:scale-95"
      >
        Search
      </button>
    </form>
  );
}
