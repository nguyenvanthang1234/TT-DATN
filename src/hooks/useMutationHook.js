import { useMutation } from "@tanstack/react-query";

// hàm này dùng gọi api nhé
export const useMutationHooks = (fnCallback) => {
  const mutation = useMutation({
    mutationFn: fnCallback,
  });
  return mutation;
};
