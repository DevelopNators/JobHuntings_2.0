import CryptoJS from "crypto-js";
const key = "01234567890123456789012345678901";
const iv = "0123456789ABCDEF";

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
    const decryptedData = JSON.parse(
      decryptedBytes.toString(CryptoJS.enc.Utf8)
    );
    return decryptedData;
  },

  encryptForUri: (data) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    const urlEncodedData = encodeURIComponent(encryptedData).replace(
      /\//g,
      "_"
    );
    return urlEncodedData;
  },

  decryptFromUrl: (urlEncodedData) => {
    const encryptedData = decodeURIComponent(urlEncodedData.replace(/_/g, "/"));
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const decryptedData = JSON.parse(
      decryptedBytes.toString(CryptoJS.enc.Utf8)
    );
    return decryptedData;
  },
};

export default cryptoService;
