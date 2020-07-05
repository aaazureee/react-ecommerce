const REDIRECTED_FROM_GOOGLE_AUTH = 'REDIRECTED_FROM_GOOGLE_AUTH';

export const isRedirectedFromGoogle = () => {
  return sessionStorage.getItem(REDIRECTED_FROM_GOOGLE_AUTH);
};

export const setRedirectedFromGoogle = () => {
  sessionStorage.setItem(REDIRECTED_FROM_GOOGLE_AUTH, 'true');
};

export const clearRedirectedFromGoogle = () => {
  sessionStorage.removeItem(REDIRECTED_FROM_GOOGLE_AUTH);
};
