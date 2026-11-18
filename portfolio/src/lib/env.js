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

export const emailJsServiceId = readEnv('VITE_EMAILJS_SERVICE_ID');
export const emailJsTemplateId = readEnv('VITE_EMAILJS_TEMPLATE_ID');
export const emailJsPublicKey = readEnv('VITE_EMAILJS_PUBLIC_KEY');

export const emailJsConfigured = Boolean(
  emailJsServiceId && emailJsTemplateId && emailJsPublicKey,
);
