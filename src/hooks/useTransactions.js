import { useQuery } from "@tanstack/react-query";
import api from "../api/client";

export const useTransactions = (filters) => {
  const referenceNo = filters?.referenceNo?.trim();

  return useQuery({
    queryKey: ["transactions", filters],
    queryFn: async () => {
      if (referenceNo) {
        const res = await api.get(`/transactions/${referenceNo}`);
        return [res.data];
      } else {
        const queryParams = new URLSearchParams(filters || {}).toString();
        const res = await api.get(`/transactions?${queryParams}`);
        return res.data;
      }
    },
    enabled: true,
  });
};
