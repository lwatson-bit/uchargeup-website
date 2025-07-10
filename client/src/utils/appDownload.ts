// App store URLs
export const APP_STORE_URLS = {
  ios: "https://apps.apple.com/us/app/u-charge-up/id6504678459",
  android: "https://play.google.com/store/apps/details?id=com.uchargeup.charge&pcampaignid=web_share"
};

// Detect user's device type
export function detectDeviceType(): 'ios' | 'android' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  
  const userAgent = window.navigator.userAgent || window.navigator.vendor || (window as any).opera;
  
  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'ios';
  }
  
  // Android detection
  if (/android/i.test(userAgent)) {
    return 'android';
  }
  
  return 'desktop';
}

// Handle app download with device detection
export function handleAppDownload(): void {
  const deviceType = detectDeviceType();
  
  switch (deviceType) {
    case 'ios':
      window.open(APP_STORE_URLS.ios, '_blank');
      break;
    case 'android':
      window.open(APP_STORE_URLS.android, '_blank');
      break;
    case 'desktop':
      // For desktop users, we'll show both options or default to iOS
      // You can customize this behavior based on your preference
      window.open(APP_STORE_URLS.ios, '_blank');
      break;
  }
}

// Get appropriate app store URL based on device
export function getAppStoreUrl(): string {
  const deviceType = detectDeviceType();
  
  switch (deviceType) {
    case 'ios':
      return APP_STORE_URLS.ios;
    case 'android':
      return APP_STORE_URLS.android;
    default:
      return APP_STORE_URLS.ios; // Default to iOS for desktop
  }
}

// Get app store button text based on device
export function getAppStoreButtonText(): string {
  const deviceType = detectDeviceType();
  
  switch (deviceType) {
    case 'ios':
      return 'Download on App Store';
    case 'android':
      return 'Get it on Google Play';
    default:
      return 'Download App';
  }
}