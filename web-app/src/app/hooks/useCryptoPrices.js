import { useQuery } from "react-query";
import { fetchCryptoPrices } from "../services/cryptoService";

export const useCryptoPrices = () => {
  return useQuery("cryptoPrices", fetchCryptoPrices, {
    refetchInterval: 30000, // Refresh every 30 seconds
  });
};
