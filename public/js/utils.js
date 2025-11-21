export function filterEventsByKeyword(events, keyword) {
  if (!keyword) return events;

  return events.filter((e) =>
    e.title.toLowerCase().includes(keyword.toLowerCase())
  );
}

export function sortEventsByDate(events) {
  return [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
}