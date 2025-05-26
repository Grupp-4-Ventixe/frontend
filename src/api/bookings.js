const API_BASE_URL = "https://ventixe-4-bookingservice.azurewebsites.net/api"; // 

export async function createBooking(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to create booking");
        }

        return await response.json(); 
    } catch (error) {
        console.error("Error creating booking:", error);
        return null;
    }
}

export async function getBookingsByEmail(email) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/byemail?email=${encodeURIComponent(email)}`);

        if (!response.ok) {
            throw new Error("Failed to fetch bookings");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return [];
    }
}

export async function deleteBooking(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete booking");
        }

        return true;
    } catch (error) {
        console.error("Error deleting booking:", error);
        return false;
    }
}
