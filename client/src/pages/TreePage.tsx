import { useState, useCallback } from 'react';
import { useNodes, useCreateNodeMutation, useDeleteNodeMutation } from '@/hooks/use-nodes';
import { NodeTree } from '@/components/node/NodeTree';
import Loading from '@/components/common/Loading';
import ErrorView from '@/components/common/ErrorView';
import ConfirmModal from '@/components/common/ConfirmModal';
import { AddNodeModal } from '@/components/node/AddNodeModal';
import { TreeHeader } from '@/components/node/TreeHeader';
import { TreeContainer } from '@/components/node/TreeContainer';
import { EmptyTreeState } from '@/components/node/EmptyTreeState';

export const TreePage = () => {
  const { data: nodes, isLoading, isError, refetch } = useNodes();
  const createNodeMutation = useCreateNodeMutation();
  const deleteNodeMutation = useDeleteNodeMutation();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [nodeIdToDelete, setNodeIdToDelete] = useState<string | null>(null);
  const [parentNodeId, setParentNodeId] = useState<string | null>(null);

  const handleAddNodeRequest = useCallback((parentId: string | null) => {
    setParentNodeId(parentId);
    setIsAddModalOpen(true);
  }, []);

  const handleConfirmAddNode = useCallback((name: string) => {
    createNodeMutation.mutate({ name, parentId: parentNodeId });
    setParentNodeId(null);
  }, [createNodeMutation, parentNodeId]);

  const handleDeleteRequest = useCallback((nodeId: string) => {
    setNodeIdToDelete(nodeId);
    setIsDeleteModalOpen(true);
  }, []);

  const confirmDelete = useCallback(() => {
    if (nodeIdToDelete) {
      deleteNodeMutation.mutate(nodeIdToDelete);
      setNodeIdToDelete(null);
    }
  }, [deleteNodeMutation, nodeIdToDelete]);

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
    <div className="min-h-screen bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--accent-bg),_transparent_40%),_radial-gradient(circle_at_bottom_left,_var(--accent-bg),_transparent_40%)] opacity-30 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <TreeHeader onAddRootNode={() => handleAddNodeRequest(null)} />

        <TreeContainer>
          {nodes && nodes.length > 0 ? (
            <div className="space-y-4">
              <NodeTree
                nodes={nodes}
                onAddNode={handleAddNodeRequest}
                onDeleteNode={handleDeleteRequest}
              />
            </div>
          ) : (
            <EmptyTreeState />
          )}
        </TreeContainer>
      </div>

      <AddNodeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleConfirmAddNode}
        title={parentNodeId ? "Create Child Node" : "Create Root Node"}
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
