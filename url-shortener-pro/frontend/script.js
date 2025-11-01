import { API_BASE_URL } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  const shortenBtn = document.getElementById("shortenBtn");
  const input = document.getElementById("urlInput");
  const errorDiv = document.getElementById("error");
  const resultDiv = document.getElementById("result");
  const qrImg = document.getElementById("qrImg");

  shortenBtn.addEventListener("click", async () => {
    const url = input.value.trim();
    errorDiv.textContent = "";
    resultDiv.textContent = "";
    qrImg.src = "";

    if (!url) {
      errorDiv.textContent = "⚠️ Please enter a valid URL.";
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/shorten?url=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      resultDiv.innerHTML = `<a href="${data.short_url}" target="_blank">${data.short_url}</a>`;
      qrImg.src = data.qr_code;
    } catch (err) {
      errorDiv.textContent = "❌ Error: Failed to fetch";
      console.error(err);
    }
  });
});
