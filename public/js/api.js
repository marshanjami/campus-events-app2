// Mock API for now - will integrate real API in Upload 3
export class EventAPI {
  constructor() {
    this.baseUrl = "/api"; // Placeholder
  }

  async fetchEvents() {
    // Mock async behavior
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Hackathon 2025",
            date: "2025-11-15",
            location: "Innovation Hub",
            description: "Collaborate, code, and innovate."
          }
        ]);
      }, 500);
    });
  }

  async submitEvent(eventData) {
    // Mock submission
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, id: Date.now() });
      }, 300);
    });
  }
}

export const api = new EventAPI();