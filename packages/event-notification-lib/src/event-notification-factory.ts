import { EventNotification } from "./event-notification";
import { EventNotificationSimple } from "./event-notification-simple";

export class EventNotificationFactory {
  public static build(): EventNotification {
    return new EventNotificationSimple();
  }
}
