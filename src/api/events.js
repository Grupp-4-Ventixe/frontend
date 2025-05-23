const API_BASE_URL = "https://localhost:7098/api"; // lokal url backend (byt till azure senare)

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

export async function fetchEventById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`);
    if (!response.ok) throw new Error("Failed to fetch event by ID");

    return await response.json();
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    return null;
  }
}

export async function createEvent(eventData) {
  try {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error("Failed to create event");
    return true;
  } catch (error) {
    console.error("Error creating event:", error);
    return false;
  }
}

export async function updateEvent(id, updatedData) {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) throw new Error("Failed to update event");
    return true;
  } catch (error) {
    console.error("Error updating event:", error);
    return false;
  }
}

export async function deleteEvent(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete event");
    return true;
  } catch (error) {
    console.error("Error deleting event:", error);
    return false;
  }
}
