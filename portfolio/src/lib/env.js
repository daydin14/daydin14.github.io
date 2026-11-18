function readEnv(...keys) {
  for (const key of keys) {
    const value = import.meta.env[key];
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }
  return '';
}

export const googleTagId = readEnv('VITE_GOOGLE_TAG_ID', 'REACT_APP_GOOGLE_TAG_ID');
export const googleTagManagerId = readEnv(
  'VITE_GOOGLE_TAG_MANAGER_ID',
  'REACT_APP_GOOGLE_TAG_MANAGER_ID',
);
export const googleMapsApiKey = readEnv(
  'VITE_GOOGLE_MAPS_API_KEY',
  'REACT_APP_GOOGLE_MAPS_API_KEY',
);
