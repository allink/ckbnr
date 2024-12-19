export function init(config) {
    updateGtag();

    // Wait for DOMContentLoaded if document.body is not ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setupBanner(config));
    } else {
        setupBanner(config);
    }
}

function updateGtag() {
    var optOutCookie = document.cookie.replace(/(?:(?:^|.*;\s*)deny_all\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    // Define dataLayer and the gtag function.
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    if (optOutCookie == "true") {
        // Default ad_storage to 'denied'.
        gtag("consent", "default", {
            "ad_user_data": "denied",
            "ad_personalization": "denied",
            "ad_storage": "denied",
            "analytics_storage": "denied"
        });
    } else {
        gtag("consent", "default", {
            "ad_user_data": "granted",
            "ad_personalization": "granted",
            "ad_storage": "granted",
            "analytics_storage": "granted"
        });
    }
}

export function optout() {
    // Set the opt-out cookie
    var denyAll = document.cookie.replace(/(?:(?:^|.*;\s*)deny_all\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (denyAll == 'true') {
        document.cookie = 'deny_all=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
    } else {
        var expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        document.cookie = 'deny_all=true; expires=' + expirationDate.toUTCString() + '; path=/';
        this.innerHTML = 'Opted out';
    }

    window.location.reload();

    dataLayer.push({
        'event': 'update_consent_state'
    });
};

function setupBanner(config) {
    // Default configuration
    const defaultConfig = {
        message: 'This site uses cookies to enhance your experience.',
    };

    // Merge user config with default config
    const finalConfig = { ...defaultConfig, ...config };

    // Create the banner element
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
    popup.style.zIndex = "9999";
    popup.innerHTML = `
        <p style="margin: 0; font-size: 14px;">${finalConfig.message}</p>
        <button id="closeConsent" style="margin-top: 10px; padding: 5px 10px; background-color: ${bodyColor}; color: ${invertedColor}; border: none; border-radius: 3px; cursor: pointer;">i'm really good</button>
        <button id="closeConsent" onClick="ckbnr.optout()" style="margin-top: 10px; padding: 5px 10px; background-color: ${bodyColor}; color: ${invertedColor}; border: none; border-radius: 3px; cursor: pointer;">reject all!</button>
    `;

    document.body.appendChild(popup);

    // Add close button functionality
    document.getElementById("closeConsent").addEventListener("click", function () {
        popup.style.display = "none";
    });
}
