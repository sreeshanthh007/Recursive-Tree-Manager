import type { ReactNode } from 'react';

interface TreeContainerProps {
  children: ReactNode;
}

export const TreeContainer = ({ children }: TreeContainerProps) => {
  return (
    <div className="relative group/container">
    
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-8 sm:p-10 transition-all duration-500 hover:shadow-[0_48px_80px_-16px_rgba(0,0,0,0.15)] min-h-[400px]">
        {children}
      </div>
    </div>
  );
};
