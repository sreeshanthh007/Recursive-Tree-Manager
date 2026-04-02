import { Button } from '@/components/ui/button';

interface TreeHeaderProps {
  onAddRootNode: () => void;
}

export const TreeHeader = ({ onAddRootNode }: TreeHeaderProps) => {
  return (
    <header className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div className="space-y-1">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Node <span className="text-primary/80">Tree</span> Manager
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
          Manage your hierarchical data visually and effectively.
        </p>
      </div>
      <Button
        onClick={onAddRootNode}
        className="group relative px-8 py-6 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-2xl shadow-primary/20 transition-all active:scale-95 duration-200 overflow-hidden"
      >
        <span className="relative z-10">Add Root Node</span>
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </Button>
    </header>
  );
};
