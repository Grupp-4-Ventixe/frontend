const API_BASE_URL = "https://localhost:7098/api"; // lokal url backend

export async function fetchAllEvents() {
  try {
    const response = await fetch(`${API_BASE_URL}/events`);
    if (!response.ok) throw new Error("Failed to fetch events");

    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
