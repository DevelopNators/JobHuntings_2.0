import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse('01234567890123456789012345678901'); // Ensure it's a 32-byte key for AES-256
const iv = CryptoJS.enc.Utf8.parse('0123456789ABCDEF');   // Ensure it's a 16-byte IV

const cryptoService = {
  encrypt: (data) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    return encryptedData;
  },

  decrypt: (encryptedData) => {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  },

  encryptForUri: (data) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    const urlEncodedData = encodeURIComponent(encryptedData).replace(/\//g, '_');
    return urlEncodedData;
  },

  decryptFromUri: (urlEncodedData) => {
    const encryptedData = decodeURIComponent(urlEncodedData.replace(/_/g, '/'));
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
};

export default cryptoService;
