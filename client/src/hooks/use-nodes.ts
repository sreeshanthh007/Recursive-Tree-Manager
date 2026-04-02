import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateNode, GetAllNodes, DeleteNode } from "@/services/node.service";
import { type CreateNodeRequest } from "@/types/node";
import { useToast } from "./use-toast";
import type { ApiError } from "@/types/api.error";



export const useNodes = () => {
  return useQuery({
    queryKey: ["nodes"],
    queryFn: GetAllNodes,
    staleTime: 1000 * 60 * 5,
  });
};

export const useCreateNodeMutation = () => {
  const toaster = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateNodeRequest) => CreateNode(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["nodes"] });
      toaster.success(data.message);
    },
    onError: (error: unknown) => {
      const message = (error as ApiError).response?.data?.message || "Failed to create node";
      toaster.error(message);
    },
  });
};

export const useDeleteNodeMutation = () => {
  const toaster = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => DeleteNode(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["nodes"] });
      toaster.success(data.message);
    },
    onError: (error: unknown) => {
      const message = (error as ApiError).response?.data?.message || "Failed to delete node";
      toaster.error(message);
    },
  });
};
