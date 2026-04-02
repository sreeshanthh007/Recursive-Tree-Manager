import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorViewProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorView = ({ message = 'Something went wrong while fetching nodes.', onRetry }: ErrorViewProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <AlertCircle className="text-destructive mb-4" size={32} />
      <p className="text-muted-foreground font-medium mb-6 max-w-sm">
        {message}
      </p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="flex items-center gap-2">
          <RefreshCw size={16} />
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorView;
