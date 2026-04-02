import { useState } from 'react';
import type { Node } from '@/types/node';
import { NodeTree } from './NodeTree';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, Plus, Trash2 } from 'lucide-react';

interface NodeItemProps {
  node: Node;
  onAddNode: (parentId: string | null) => void;
  onDeleteNode: (nodeId: string) => void;
}

export const NodeItem = ({ node, onAddNode, onDeleteNode }: NodeItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col">
      <div className="flex items-center group py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors gap-2">

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className={`h-7 w-7 transition-opacity ${!hasChildren ? 'opacity-0 cursor-default' : 'opacity-100'}`}
          disabled={!hasChildren}
        >
          {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>

        
        <span className="flex-grow font-medium text-sm text-gray-700 dark:text-gray-300">
          {node.name}
        </span>

        {/* Action Buttons */}
        <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onAddNode(node._id)}
            className="h-7 w-7 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30"
            title="Add Child"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDeleteNode(node._id)}
            className="h-7 w-7 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/30"
            title="Delete Node"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Recursive Children Rendering */}
      {isExpanded && hasChildren && (
        <div className="ml-6 pl-3 border-l border-gray-200 dark:border-gray-800 my-1">
          <NodeTree
            nodes={node.children}
            onAddNode={onAddNode}
            onDeleteNode={onDeleteNode}
          />
        </div>
      )}
    </div>
  );
};
