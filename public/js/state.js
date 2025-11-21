export const state = {
  events: [
    {
      id: 1,
      title: "Hackathon 2025",
      date: "2025-11-15",
      location: "Innovation Hub",
      description: "Collaborate, code, and innovate with your peers across campus."
    },
    {
      id: 2,
      title: "Music Fest",
      date: "2025-11-20",
      location: "Main Grounds",
      description: "Join us for a night of talent and live performances by student bands."
    },
    {
      id: 3,
      title: "Career Fair 2025",
      date: "2025-11-25",
      location: "Student Center",
      description: "Meet potential employers and explore internship opportunities."
    }
  ],

  subscribers: [],

  subscribe(fn) {
    this.subscribers.push(fn);
  },

  notify() {
    this.subscribers.forEach((fn) => fn(this));
  },

  addEvent(event) {
    const newEvent = {
      id: Date.now(),
      title: event.title,
      date: event.date,
      location: event.location,
      description: event.description
    };
    this.events.push(newEvent);
    this.notify();
  },

  getEventById(id) {
    return this.events.find((event) => event.id === id);
  },

  getAllEvents() {
    return [...this.events];
  }
};