import { useState } from 'react';
import { useNodes, useCreateNodeMutation, useDeleteNodeMutation } from '@/hooks/use-nodes';
import { NodeTree } from '@/components/node/NodeTree';
import Loading from '@/components/common/Loading';
import ErrorView from '@/components/common/ErrorView';
import ConfirmModal from '@/components/common/ConfirmModal';
import { AddNodeModal } from '@/components/node/AddNodeModal';
import { Button } from '@/components/ui/button';

export const TreePage = () => {
  
  const { data: nodes, isLoading, isError, refetch } = useNodes();

  const createNodeMutation = useCreateNodeMutation();

  const deleteNodeMutation = useDeleteNodeMutation();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [nodeIdToDelete, setNodeIdToDelete] = useState<string | null>(null);

  const [parentNodeId, setParentNodeId] = useState<string | null>(null);

  const handleAddNodeRequest = (parentId: string | null) => {
    setParentNodeId(parentId);
    setIsAddModalOpen(true);
  };

  const handleConfirmAddNode = (name: string) => {
    createNodeMutation.mutate({ name, parentId: parentNodeId });
    setParentNodeId(null);
  };

  const handleDeleteRequest = (nodeId: string) => {
    setNodeIdToDelete(nodeId);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (nodeIdToDelete) {
      deleteNodeMutation.mutate(nodeIdToDelete);
      setNodeIdToDelete(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <ErrorView onRetry={refetch} />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Node Tree Manager</h1>
        <Button
          onClick={() => handleAddNodeRequest(null)}
          className="font-semibold shadow-md active:scale-95 px-6 py-2"
        >
          Add Root Node
        </Button>
      </div>

      <div className="bg-card rounded-2xl border shadow-sm p-6">
        {nodes && nodes.length > 0 ? (
          <NodeTree
            nodes={nodes}
            onAddNode={handleAddNodeRequest}
            onDeleteNode={handleDeleteRequest}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-medium mb-2">No nodes found.</p>
            <p className="text-sm text-gray-400">Create a root node above to get started.</p>
          </div>
        )}
      </div>

      <AddNodeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleConfirmAddNode}
        title={parentNodeId ? "Add Child Node" : "Add Root Node"}
      />

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this node and all its nested children? This action cannot be undone."
      />
    </div>
  );
};

export default TreePage;
