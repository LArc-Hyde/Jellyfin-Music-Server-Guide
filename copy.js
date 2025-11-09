function copyCode(buttonElement) {
    // 1. Find the adjacent code element
    const codeElement = buttonElement.nextElementSibling.querySelector('code');

    // 2. Get the clean text content
    const textToCopy = codeElement.innerText;

    // 3. Use the Clipboard API to copy it
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Optional: Provide feedback to the user
        const originalText = buttonElement.innerText;
        buttonElement.innerText = 'Copied!';

        // Change back after a short delay
        setTimeout(() => {
            buttonElement.innerText = originalText;
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
