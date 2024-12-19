
document.addEventListener("DOMContentLoaded", function () {
    // Function to get the dominant background color of the body
    function getComputedBodyStyle() {
        const bodyStyles = window.getComputedStyle(document.body);
        const bgColor = bodyStyles.backgroundColor || "rgb(255, 255, 255)";
        return bgColor;
    }

    // Function to invert RGB color
    function invertColor(rgb) {
        const colorMatch = rgb.match(/\d+/g);
        if (!colorMatch || colorMatch.length < 3) return "#000000";
        const r = 255 - parseInt(colorMatch[0]);
        const g = 255 - parseInt(colorMatch[1]);
        const b = 255 - parseInt(colorMatch[2]);
        return `rgb(${r}, ${g}, ${b})`;
    }

    const bodyColor = getComputedBodyStyle();
    const invertedColor = invertColor(bodyColor);

    // Create cookie consent pop-up
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.bottom = "10px";
    popup.style.right = "10px";
    popup.style.padding = "15px";
    popup.style.backgroundColor = invertedColor;
    popup.style.color = bodyColor;
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
    popup.style.zIndex = "1000";
    popup.innerHTML = `
        <p style="margin: 0; font-size: 14px;">We use cookies to improve your experience.</p>
        <button id="closeConsent" style="margin-top: 10px; padding: 5px 10px; background-color: ${bodyColor}; color: ${invertedColor}; border: none; border-radius: 3px; cursor: pointer;">Got it</button>
    `;

    document.body.appendChild(popup);

    // Add close button functionality
    document.getElementById("closeConsent").addEventListener("click", function () {
        popup.style.display = "none";
    });
});
