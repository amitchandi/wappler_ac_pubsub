# wappler_ac_pubsub
These components provide a simple pub/sub mechanism that allows a partial view to communicate back to its parent page. Instead of tightly coupling partials to the parent’s logic, a partial can publish events, and the parent can subscribe to them and react. This makes partials more modular, reusable, and easier to maintain.

## Components
- **Publisher**: Publish events to notify subscribers about changes.
- **Subscriber**: Subscribe to events published by publishers and perform actions based on the received events.

---

### Publisher

#### Properties
- **ID**: ID of the Publisher

#### Actions
- **Trigger**: Trigger an event with the given Event Name.

---

### Subscriber

#### Properties
- **ID**: ID of the Subscriber
- **Event Name**: The name of the event the component is subscribed to.

#### Events
- **Event Triggered**: Fired when the event set in Event Name is triggered.

---

## Instructions for Intended Use Case
You are meant to have 1 Publisher and 1 or more Subscribers. Place the Publisher in your layout so all pages under the layout have visibility of the Publisher.
1. Place a Publisher component in your layout.
2. Place a Subscriber component in your content page and set the Event Name the subscriber is listening to.
3. Under the Subscriber's Dynamic Events, setup the action(s) you would like to perform when the event is triggered.
4. Setup a trigger for your event from a partial using the Trigger Action of your Publisher component.


## License
The Publisher and Subscriber components are licensed under the MIT License. Please refer to the license file for more details.
