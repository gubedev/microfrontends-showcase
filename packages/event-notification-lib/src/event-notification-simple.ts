import { EventNotification } from "./event-notification";

export class EventNotificationSimple implements EventNotification {
  publish(topic: string, event: any): void {
    const element = document.getElementById("root");
    const customEvent = new CustomEvent(topic, {
      detail: { ...event },
    });

    element?.dispatchEvent(customEvent);
  }
  subscribe(topic: string, handler: (event: any) => Promise<any>): void {
    const element = document.getElementById("root");
    element?.addEventListener(topic, handler);
  }
  unsubscribe(topic: string, handler: (event: any) => Promise<any>): void {
    const element = document.getElementById("root");
    element?.removeEventListener(topic, handler);
  }
}
