
// import { Platform } from 'react-native';
// import apiService from './api_service';
// export interface AuthAttributes {
//   mobile: string;
//   password: string;
//   device_type: "ios" | "android";
// }
// export interface AuthRequestData {
//   data: {
//     type: "user";
//     attributes: AuthAttributes;
//     id: null;
//   };
// }
// export const authStore = {
//   login: async (formData: { mobile: string; password: string }) => {
//     const deviceType = Platform.OS === 'ios' ? 'ios' : 'android';
//     const requestData: AuthRequestData = {
//       data: {
//         type: "user",
//         attributes: {
//           mobile: formData.mobile,
//           password: formData.password,
//           device_type: deviceType, 
//         },
//         id: null,
//       },
//     };
   
//     try {
//       const response = await apiService.create("auth/login", requestData);
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   },
// };









// import { flow, types } from "mobx-state-tree";
// import { loginApi } from "./api_service";

// const AuthStore = types
//   .model("AuthStore", {
     
//     isLoading: types.optional(types.boolean, false),
//     error: types.maybeNull(types.string),
//   })
//   .actions((self) => ({
//     login: flow(function* (formData: { mobile: string; password: string }) {
//       self.isLoading = true;
//       self.error = null;
//       try {
//         const response = yield loginApi(formData.mobile, formData.password);
//         console.log("Login success:", response);
//       } catch (err: any) {
//         self.error = err?.response?.data?.errors?.[0]?.detail || "Login failed";
//         console.log("Login error:", self.error);
//       } finally {
//         self.isLoading = false;
//       }
//     }),
//   }));

// export const authStore = AuthStore.create({});





import { flow, types } from "mobx-state-tree";
import { createUserDefaultModel } from "../models/userModel";
import { loginApi } from "./api_service";

const AuthStore = types
  .model("AuthStore", {
    isLoading: types.optional(types.boolean, false),
    error: types.maybeNull(types.string),
    user: createUserDefaultModel(), 
  })
  .actions((self) => ({
    login: flow(function* (formData: { mobile: string; password: string }) {
      self.isLoading = true
      self.error = null
      try {
        const response = yield loginApi(formData.mobile, formData.password)
        console.log("Login success:", response)
        if (response?.data) {
          self.user.fromApi(response.data)
          return self.user
        }
      } catch (err: any) {
        self.error = err?.response?.data?.errors?.[0]?.detail || "Login failed"
        console.log("Login error:", self.error)
      } finally {
        self.isLoading = false
      }
    }),
  }))

export const authStore = AuthStore.create({})
