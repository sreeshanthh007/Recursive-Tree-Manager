import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateNode, GetAllNodes, DeleteNode } from "@/services/node.service";
import { type CreateNodeRequest } from "@/types/node";
import { toast } from "sonner";
import { useToast } from "./use-toast";

export const useNodes = () => {
  return useQuery({
    queryKey: ["nodes"],
    queryFn: GetAllNodes,
    staleTime: 1000 * 60 * 5,
  });
};

export const useCreateNodeMutation = () => {
  const toast = useToast()
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateNodeRequest) => CreateNode(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["nodes"] });
      toast.success(data.message)
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || "Failed to create node";
      toast.error(message);
    },
  });
};

export const useDeleteNodeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => DeleteNode(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["nodes"] });
      toast.success(data.message);
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || "Failed to delete node";
      toast.error(message);
    },
  });
};
