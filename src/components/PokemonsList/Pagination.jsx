/** * Pagination Component
 * Renders pagination buttons to navigate between pages of Pokémon data.
 */

function Pagination({ next, prev, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-6 my-12">
      <button
        onClick={() => onPageChange(prev)}
        disabled={!prev}
        className={` cursor-pointer group relative flex items-center gap-2 px-8 py-3 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 ${
          !prev
            ? "bg-white/10 text-white/20 cursor-not-allowed border border-white/5"
            : "bg-white text-slate-900 hover:bg-yellow-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        }`}
      >
        <span className="text-xl">←</span>
        <span>Prev</span>
      </button>

      <button
        onClick={() => onPageChange(next)}
        disabled={!next}
        className={` cursor-pointer  group relative flex items-center gap-2 px-8 py-3 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 ${
          !next
            ? "bg-white/10 text-white/20 cursor-not-allowed border border-white/5"
            : "bg-white text-slate-900 hover:bg-yellow-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        }`}
      >
        <span>Next</span>
        <span className="text-xl">→</span>
      </button>
    </div>
  );
}

export default Pagination;
