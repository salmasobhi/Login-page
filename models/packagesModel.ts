

// interface for parsed package
export interface Package {
  type: string;
  id: string;
  title: string;
  price: string;
  duration_months: number;
  sessions_count: number;
  sessions_type: string;
  session_time_in_minutes: string;
  package_price: string;
}

//  interface for raw API response
interface RawPackageAttributes {
  title: string;
  price: string;
  duration_months: number;
  sessions_count: number;
  sessions_type: string;
  session_time_in_minutes: string;
  package_price: string;
}

interface RawPackageItem {
  type: "package";
  id: string;
  attributes: RawPackageAttributes;
}
export interface LandingPageResponse {
  data: any;
  included?: RawPackageItem[];
}
export class PackageModelMapper {
  static parseAllPackages(rawResponse: LandingPageResponse): Package[] {
    const rawPackages = rawResponse?.included;
    console.log("rawPackages",rawPackages)
    if (!rawPackages?.length) {
      return [];
    }
    return rawPackages
      .map((item) => {
        console.log("item",item)
        const { id, type, attributes } = item;
        const {
          title = "",
          price = "0",
          duration_months = 0,
          sessions_count = 0,
          sessions_type = "",
          session_time_in_minutes = "",
          package_price = "0",
        } = attributes;

        return {
          id,
          type,
          title,
          price,
          duration_months,
          sessions_count,
          sessions_type,
          session_time_in_minutes,
          package_price,
        };
      });
  }
}



