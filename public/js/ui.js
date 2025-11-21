export function renderEventCard(event) {
  return `
    <article class="event-card">
      <h3>${escapeHtml(event.title)}</h3>
      <p><strong>Date:</strong> ${formatDate(event.date)} | <strong>Venue:</strong> ${escapeHtml(event.location)}</p>
      <p>${escapeHtml(event.description)}</p>
    </article>
  `;
}

export function renderEventList(events) {
  if (events.length === 0) {
    return `
      <section>
        <p>No events available at the moment. Check back soon!</p>
      </section>
    `;
  }

  return `
    <section class="card-grid">
      ${events.map(renderEventCard).join("")}
    </section>
  `;
}

export function renderHomePage() {
  return `
    <section>
      <h2>Welcome to Campus Life</h2>
      <p>Explore campus events, join clubs, and stay updated on what's happening around your university.</p>
      <a href="#/events" class="button">View Upcoming Events</a>
    </section>
  `;
}

export function renderEventForm() {
  return `
    <h2>Submit a Campus Event</h2>
    <form id="event-form" aria-describedby="form-help">
      <p id="form-help">All fields marked with * are required.</p>

      <div class="form-group">
        <label for="eventName">Event Name *</label>
        <input id="eventName" name="eventName" type="text" required />
      </div>

      <div class="form-group">
        <label for="eventDate">Event Date *</label>
        <input id="eventDate" name="eventDate" type="date" required />
      </div>

      <div class="form-group">
        <label for="eventLocation">Location *</label>
        <input id="eventLocation" name="eventLocation" type="text" required />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="4"></textarea>
      </div>

      <button type="submit">Submit Event</button>
    </form>
  `;
}

// Helper functions
function escapeHtml(unsafe) {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}