// models/userModelRQ.ts
export interface User {
  id?: string;
  type?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  mobile?: string;
  email?: string;
  profilePicture?: string;
  genderLabel?: string;
  countryLabel?: string;
  cityLabel?: string;
  educationalLevelLabel?: string;
  educationalSystemLabel?: string;
  isSubscribed?: boolean;
  token?: string;
}

export class userModelRQ {
  static parse(raw: any): User {
    console.log("raw", raw)
    const data = raw.data.attributes  
    return {
      id: data.id ?? "",
      type: data.type ?? "",
      name: data.name ?? "",
      firstName: data.first_name ?? "",
      lastName: data.last_name ?? "",
      mobile: data.mobile ?? "",
      email: data.email ?? "",
      profilePicture: data.profile_picture ?? "",
      genderLabel: data.gender_label ?? "",
      countryLabel: data.country_label ?? "",
      cityLabel: data.city_label ?? "",
      educationalLevelLabel: data.educational_level_label ?? "",
      educationalSystemLabel: data.educational_system_label ?? "",
      isSubscribed: data.is_subscribed ?? false,
      token: raw.meta.token ?? "",
    };
  }
}
