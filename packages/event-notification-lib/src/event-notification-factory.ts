import { EventNotification } from "./event-notification";
import { EventNotificationSimple } from "./event-notification-simple";

/**
 * Factory class for building instances of EventNotification.
 */
export class EventNotificationFactory {
  /**
   * Build and return an instance of EventNotification.
   * @returns An instance of the EventNotification interface.
   */
  public static build(): EventNotification {
    // Return a new instance of EventNotificationSimple
    return new EventNotificationSimple();
  }
}
