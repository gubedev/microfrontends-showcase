import { StorageService } from "./storage-service";
import { StorageServiceSimple } from "./storage-service-simple";

/**
 * Factory class for creating instances of the StorageService.
 * @class
 */
export class StorageServiceFactory {
  /**
   * Builds and returns a new instance of the StorageServiceSimple class.
   * @static
   * @returns {StorageService} - A new instance of the StorageServiceSimple class.
   */
  public static build(): StorageService {
    return new StorageServiceSimple();
  }
}
