export default async function logout(e) {
    e.preventDefault();
    try {
        const response = await fetch("/auth/logout", {
            method: "POST",
            credentials: "include"
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = "/auth/login";
        }
    } catch (err) {
        console.error("Logout failed:", err);
    }
}