export function init(config) {
    // Default configuration
    const defaultConfig = {
        message: 'This site uses cookies to enhance your experience.',
        buttonText: 'Got it!',
        position: 'bottom', // or 'top'
        theme: 'light', // or 'dark'
        onAccept: () => console.log('Cookies accepted!'),
    };

    // Merge user config with default config
    const finalConfig = { ...defaultConfig, ...config };

    // Create the banner element
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style[finalConfig.position] = '0';
    banner.style.width = '100%';
    banner.style.padding = '10px';
    banner.style.backgroundColor = finalConfig.theme === 'dark' ? '#333' : '#fff';
    banner.style.color = finalConfig.theme === 'dark' ? '#fff' : '#000';
    banner.style.textAlign = 'center';
    banner.style.boxShadow = '0px -2px 5px rgba(0,0,0,0.2)';

    // Add message
    const message = document.createElement('span');
    message.textContent = finalConfig.message;
    banner.appendChild(message);

    // Add button
    const button = document.createElement('button');
    button.textContent = finalConfig.buttonText;
    button.style.marginLeft = '10px';
    button.style.padding = '5px 10px';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.backgroundColor = '#007BFF';
    button.style.color = '#fff';
    button.style.borderRadius = '3px';
    button.onclick = () => {
        document.body.removeChild(banner);
        finalConfig.onAccept();
    };
    banner.appendChild(button);

    // Append banner to the body
    document.body.appendChild(banner);
}

window.CookieBanner = { init };
