import CryptoJS from 'crypto-js';

/// 密碼雜湊
export const HashPassword = (password, serverKey) => {
  return CryptoJS.SHA256(password + serverKey).toString();
};

/// 產生 32 位隨機碼
export const generateGuid32 = () => {
  return crypto.randomUUID().replace(/-/g, "");
};

// 產生 10 碼隨機密碼
export const generateRandomPassword = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
  let password = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
};

// 產生 8 碼隨機註冊碼
export const generateRandomRegister = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let register = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    register += chars[randomIndex];
  }

  return register;
};

/// 檢查使用者是否擁有指定的權限 ID
export function HasPermission(authorityArray, permId) {
  if (!Array.isArray(authorityArray)) return false;
  return authorityArray.some((p) => {
    const pid = (p.ID || p.id || '').toString().toUpperCase();
    const checked = p.Checked === true || p.Checked === 'True' || p.Checked === 'true';
    return pid === permId && checked;
  });
}

/**
 * 共用複製到剪貼簿函式
 * @param {string} text - 想要複製的文字
 * @param {Function} [onSuccess] - 複製成功後的回呼函式
 * @param {Function} [onError] - 複製失敗後的回呼函式
 */
export const handleCopy = (text, onSuccess = null, onError = null) => {
  if (!text) return;

  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('複製成功:', text);
      if (typeof onSuccess === 'function') onSuccess(text);
    })
    .catch((err) => {
      console.error('複製失敗', err);
      if (typeof onError === 'function') onError(err);
    });
};

export function ValidatePassword(password, isOnlyAlphatype = true) {
  const isLengthValid = password.length >= 8;
  let isValid = false;

  if (isOnlyAlphatype) {
    const isValidFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]+$/.test(password);
    isValid = isLengthValid && isValidFormat;
  } else {
    const isValidFormat = /^(?=.*[A-Za-z])(?=.*[^A-Za-z]).+$/.test(password);
    isValid = isLengthValid && isValidFormat;
  }

  return { isValid };
}
