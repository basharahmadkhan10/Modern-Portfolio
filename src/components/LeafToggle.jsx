import { useLeaf } from '../context/LeafContext';

export default function LeafToggle() {
 const { leavesEnabled, toggleLeaves } = useLeaf();

 return (
 <button
 onClick={toggleLeaves}
 className="fixed top-8 right-24 z-50 p-2 group bg-transparent hover:-translate-y-1 transition-transform"
 aria-label="Toggle Leaves"
 title={leavesEnabled ? "Hide Leaves" : "Show Leaves"}
 >
 <div className="relative flex items-center justify-center w-8 h-8">
 <svg 
 viewBox="0 0 24 24" 
 fill="none" 
 stroke="currentColor" 
 strokeWidth="2" 
 strokeLinecap="round" 
 strokeLinejoin="round" 
 className={`w-6 h-6 transition-colors duration-300 ${leavesEnabled ? 'text-accent' : 'text-gray-400 dark:text-gray-600'}`}
 >
 <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
 <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
 </svg>
 {!leavesEnabled && (
 <div className="absolute inset-0 flex items-center justify-center">
 <div className="w-8 h-[2px] bg-red-500 rotate-45 transform origin-center" />
 </div>
 )}
 </div>
 </button>
 );
}

