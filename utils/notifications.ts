// import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
// const NOTIFICATION_PERMISSION = (PERMISSIONS.ANDROID as any).POST_NOTIFICATIONS ?? 'android.permission.POST_NOTIFICATIONS';

// export async function requestNotificationPermission() {
//   let result = await check(NOTIFICATION_PERMISSION);

//   if (result === RESULTS.DENIED) {
//     console.log("requst-notifi");
//     result = await request(NOTIFICATION_PERMISSION);

//     if (result === RESULTS.GRANTED) {
//       console.log("done")
      
//     } else {
//       console.log("not access");
//     }
//   }
  
// }



import { PermissionsAndroid, Platform } from 'react-native';

export async function requestAndroidNotificationsPermission() {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    console.log("Platform.Version:", Platform.Version);

    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
    console.log('android permission result', result);
    return result === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
}





export async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("done");
    } else {
      console.log("not allow");
    }
  } catch (err) {
    console.warn(err);
  }
}
