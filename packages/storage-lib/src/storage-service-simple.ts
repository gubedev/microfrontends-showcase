import { StorageService } from "./storage-service";

/**
 * A simple implementation of the StorageService interface using the browser's localStorage.
 * @class
 * @implements {StorageService}
 */
export class StorageServiceSimple implements StorageService {
  /**
   * Sets the value associated with a key in the localStorage.
   * @param {string} key - The key for which the value will be set.
   * @param {string} value - The value to store.
   * @returns {void}
   */
  setValue(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * Gets the value associated with a key from the localStorage.
   * @param {string} key - The key for which the value will be retrieved.
   * @returns {string | null} - The value associated with the key. If the key does not exist, returns null.
   */
  getValue(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Removes the value associated with a key from the localStorage.
   * @param {string} key - The key for which the value will be removed.
   * @returns {void}
   */
  removeValue(key: string): void {
    localStorage.removeItem(key);
  }
}
