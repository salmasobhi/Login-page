import { getUserData } from "@/utils/storage/cacheUser";
import { useQuery } from "@tanstack/react-query";
export const useQueryUserData = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
  });
  return { user, isLoading }   
}