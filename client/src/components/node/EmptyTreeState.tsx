import { PlusCircle } from 'lucide-react';

export const EmptyTreeState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-700">
      <div className="w-24 h-24 bg-gray-50 dark:bg-gray-800/50 rounded-full flex items-center justify-center mb-6 text-gray-300 dark:text-gray-700 border border-dashed border-gray-200 dark:border-gray-800">
        <PlusCircle size={48} />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">No nodes found.</h3>
      <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto font-medium">
        Your workspace is currently empty. Create your first root node to begin building your tree structure.
      </p>
    </div>
  );
};
