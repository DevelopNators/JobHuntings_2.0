import CryptoJS from "crypto-js";
const key = "01234567890123456789012345678901";
const iv = "0123456789ABCDEF";

const CryptoService = {

  encrypt: (data) => {
    try {
      const ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        CryptoJS.enc.Utf8.parse(key),
        {
          iv: CryptoJS.enc.Utf8.parse(iv),
          padding: CryptoJS.pad.Pkcs7,
          mode: CryptoJS.mode.CBC,
        }
      ).toString();
      return ciphertext;
    } catch (error) {
      console.error("Encryption error:", e);
      throw error
    }
  },

  decrypt: (ciphertext) => {
    try {
      const bytes = CryptoJS.AES.decrypt(
        ciphertext,
        CryptoJS.enc.Utf8.parse(key),
        {
          iv: CryptoJS.enc.Utf8.parse(iv),
          padding: CryptoJS.pad.Pkcs7,
          mode: CryptoJS.mode.CBC,
        }
      );
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    } catch (error) {
      console.error("Encryption error:", e);
      throw error
    }
  },

  encryptForUri: (data) => {
    try {
      const encrypted = CryptoJS.AES.encrypt(
        data,
        CryptoJS.enc.Utf8.parse(key),
        {
          iv: CryptoJS.enc.Utf8.parse(iv),
          padding: CryptoJS.pad.Pkcs7,
          mode: CryptoJS.mode.CBC,
        }
      );
      const base64Encoded = encrypted.toString();
      const urlEncoded = encodeURIComponent(base64Encoded).replace(/\//g, "_");
      return urlEncoded;
    } catch (e) {
      console.error("Encryption error:", e);
      throw error
    }
  },

  decryptFromUri: (encryptedForUri) => {
    try {
      const base64Decoded = decodeURIComponent(
        encryptedForUri.replace(/_/g, "/")
      );
      const decrypted = CryptoJS.AES.decrypt(
        base64Decoded,
        CryptoJS.enc.Utf8.parse(key),
        {
          iv: CryptoJS.enc.Utf8.parse(iv),
          padding: CryptoJS.pad.Pkcs7,
          mode: CryptoJS.mode.CBC,
        }
      );
      const decryptedText = CryptoJS.enc.Utf8.stringify(decrypted);
      return decryptedText;
    } catch (e) {
      console.error("Decryption error:", e);
      throw error
    }
  },
};

export default CryptoService;
