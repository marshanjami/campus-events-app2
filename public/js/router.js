import { state } from "./state.js";
import { renderHomePage, renderEventList, renderEventForm } from "./ui.js";

export function router() {
  const main = document.querySelector("main");
  if (!main) return;

  const route = window.location.hash || "#/";

  // Update active nav link
  updateActiveNav(route);

  switch (route) {
    case "#/":
      main.innerHTML = renderHomePage();
      break;

    case "#/events":
      main.innerHTML = `
        <h2>Upcoming Events</h2>
        ${renderEventList(state.events)}
      `;
      break;

    case "#/form":
      main.innerHTML = renderEventForm();
      attachFormHandler();
      break;

    default:
      main.innerHTML = `
        <h2>404 – Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <a href="#/" class="button">Go Home</a>
      `;
  }

  // Ensure main is focused for accessibility
  main.focus();
}

function updateActiveNav(currentRoute) {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentRoute) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function attachFormHandler() {
  const form = document.querySelector("#event-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const newEvent = {
      title: formData.get("eventName"),
      date: formData.get("eventDate"),
      location: formData.get("eventLocation"),
      description: formData.get("description") || "No description provided"
    };

    state.addEvent(newEvent);

    // Show success message
    const successMsg = document.createElement("div");
    successMsg.className = "success-message";
    successMsg.textContent = "✓ Event submitted successfully!";
    successMsg.setAttribute("role", "status");
    successMsg.setAttribute("aria-live", "polite");
    form.insertAdjacentElement("beforebegin", successMsg);

    // Redirect to events page after 1.5s
    setTimeout(() => {
      window.location.hash = "#/events";
    }, 1500);
  });
}