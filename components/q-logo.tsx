import { Settings } from 'lucide-react';

export function QLogo() {
  return (
    <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group cursor-pointer flex-shrink-0">
      {/* Main Q circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-sky-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
        {/* Q Letter */}
        <span className="text-lg sm:text-xl font-bold text-white select-none">Q</span>
      </div>
      
      {/* Settings icon rotates on hover */}
      <Settings className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-500 bg-white rounded-full p-0.5 shadow-md group-hover:rotate-90 transition-transform duration-500" />
    </div>
  );
}
