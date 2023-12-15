// Define an interface for event notifications
export interface EventNotification {
  /**
   * Subscribe to a specific topic with a handler function.
   * @param topic - The topic to subscribe to.
   * @param handler - The function to handle the event. It can be asynchronous (returning a Promise) or synchronous.
   */
  subscribe(topic: string, handler: (event: any) => Promise<any> | void): void;

  /**
   * Unsubscribe from a specific topic and handler function.
   * @param topic - The topic to unsubscribe from.
   * @param handler - The function that was used for subscription.
   */
  unsubscribe(
    topic: string,
    handler: (event: any) => Promise<any> | void
  ): void;

  /**
   * Publish an event to a specific topic, notifying all subscribers.
   * @param topic - The topic to publish the event to.
   * @param event - The event object to be passed to subscribers.
   */
  publish(topic: string, event: any): void;
}
