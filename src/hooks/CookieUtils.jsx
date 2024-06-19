// useCookie.js
import { useState } from 'react';

export function useCookie(name) {
  const [cookieValue, setCookieValue] = useState(null);

  function getCookie() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      console.log(cookieName, cookieValue)
      if (cookieName.trim() === name) {
        return cookieValue;
      }
    }
    return null;
  }

  return { cookieValue, getCookie };
}