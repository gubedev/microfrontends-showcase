import { EventNotification } from "./event-notification";

/**
 * Implementation of the EventNotification interface using browser's CustomEvent.
 */
export class EventNotificationSimple implements EventNotification {
  /**
   * Publishes an event to a specific topic by dispatching a CustomEvent.
   * @param topic - The topic to publish the event to.
   * @param event - The event object to be passed to subscribers.
   */
  publish(topic: string, event: any): void {
    // Get the root element (assuming it's an HTML element)
    const element = document.getElementById("root");

    // Create a CustomEvent with the specified topic and event details
    const customEvent = new CustomEvent(topic, {
      detail: { ...event }, // Use spread operator to create a shallow copy of the event object
    });

    // Dispatch the CustomEvent to notify all subscribers
    element?.dispatchEvent(customEvent);
  }

  /**
   * Subscribes to a specific topic with a handler function.
   * @param topic - The topic to subscribe to.
   * @param handler - The function to handle the event. It can be asynchronous (returning a Promise) or synchronous.
   */
  subscribe(topic: string, handler: (event: any) => Promise<any>): void {
    // Get the root element (assuming it's an HTML element)
    const element = document.getElementById("root");

    // Add an event listener for the specified topic with the provided handler
    element?.addEventListener(topic, handler);
  }

  /**
   * Unsubscribes from a specific topic and handler function.
   * @param topic - The topic to unsubscribe from.
   * @param handler - The function that was used for subscription.
   */
  unsubscribe(topic: string, handler: (event: any) => Promise<any>): void {
    // Get the root element (assuming it's an HTML element)
    const element = document.getElementById("root");

    // Remove the event listener for the specified topic and handler
    element?.removeEventListener(topic, handler);
  }
}
