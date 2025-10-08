
import apiService from "@/api/api_service";
import { Package, PackageModelMapper } from "@/models/packagesModel";
import { useQuery } from "@tanstack/react-query";
const DEFAULT_PARAMS = {
  sessions_type: "online",
  include: "packages",
};
const fetchPackages = async (customParams?: {}): Promise<Package[]> => {
  const params = { ...DEFAULT_PARAMS, ...customParams };
  const data = await apiService.getAll(
    "landing-page/landing" ,params
  );
  console.log("API response", data);
  return PackageModelMapper.parseAllPackages(data);
};


export const useQueryPackages = (customParams?: {} ) => {
  const { data, isLoading, error } = useQuery<Package[], Error>({
    queryKey: ["packages",customParams],
    queryFn: fetchPackages,
  });

  if (isLoading) {
    return { state: "loading", data: [], error: null };
  }

  if (error) {
    return { state: "error", data: [], error };
  }

  if (!data || data.length === 0) {
    return { state: "empty", data: [], error: null };
  }
  return { state: "success", data, error: null };
};

