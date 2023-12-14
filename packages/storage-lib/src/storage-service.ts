/**
 * Interface defining a storage service for handling storage operations.
 * @interface
 */
export interface StorageService {
  /**
   * Sets the value associated with a key in the storage.
   * @param {string} key - The key for which the value will be set.
   * @param {string} value - The value to store.
   * @returns {void}
   */
  setValue(key: string, value: string): void;

  /**
   * Gets the value associated with a key from the storage.
   * @param {string} key - The key for which the value will be retrieved.
   * @returns {string} - The value associated with the key. If the key does not exist, it returns an empty string.
   */
  getValue(key: string): string;

  /**
   * Removes the value associated with a key from the storage.
   * @param {string} key - The key for which the value will be removed.
   * @returns {void}
   */
  removeValue(key: string): void;
}
