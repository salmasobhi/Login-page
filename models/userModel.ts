import { Instance, SnapshotOut, types } from "mobx-state-tree"
export const UserModel = types
  .model("UserModel")
  .props({
    id: types.maybe(types.string),
    type: types.maybe(types.string),
    name: types.maybe(types.string),
    first_name: types.maybe(types.string),
    last_name: types.maybe(types.string),
    mobile: types.maybe(types.string),
    email: types.maybe(types.string),
    profile_picture: types.maybe(types.string),
    gender_label: types.maybe(types.string),
    country_label: types.maybe(types.string),
    city_label: types.maybe(types.string),
    educational_level_label: types.maybe(types.string),
    educational_system_label: types.maybe(types.string),
    is_subscribed: types.maybe(types.boolean),
  })
  .views(() => ({})) 
  .actions((self) => ({
    fromApi(data: any) {
      self.id = data.id
      self.type = data.type
      self.name = data.attributes?.name || ""
      self.first_name = data.attributes?.first_name || ""
      self.last_name = data.attributes?.last_name || ""
      self.mobile = data.attributes?.mobile || ""
      self.email = data.attributes?.email || ""
      self.profile_picture = data.attributes?.profile_picture || ""
      self.gender_label = data.attributes?.gender_label || ""
      self.country_label = data.attributes?.country_label || ""
      self.city_label = data.attributes?.city_label || ""
      self.educational_level_label = data.attributes?.educational_level_label || ""
      self.educational_system_label = data.attributes?.educational_system_label || ""
      self.is_subscribed = data.attributes?.is_subscribed || false
    }
  })) 
type UserType = Instance<typeof UserModel>
export interface User extends UserType {}

type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType {}

export const createUserDefaultModel = () => types.optional(UserModel, {})
