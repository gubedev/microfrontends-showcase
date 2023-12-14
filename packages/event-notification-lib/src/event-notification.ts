export interface EventNotification {
  subscribe(topic: string, handler: (event: any) => Promise<any> | void): void;
  unsubscribe(
    topic: string,
    handler: (event: any) => Promise<any> | void
  ): void;
  publish(topic: string, event: any): void;
}
