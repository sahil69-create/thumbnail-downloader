# YT Thumbnail Grabber 🔥

A sleek, responsive, and interactive web application to instantly fetch and download high-quality thumbnails from any YouTube video.

## Features

- **Instant Thumbnail Fetching:** Paste any YouTube video link and get the highest resolution thumbnail (`maxresdefault.jpg`) available.
- **Dynamic URL Cleaning:** Automatically removes unnecessary query parameters (e.g., `?si=...`) when pasting a YouTube link, ensuring a clean video ID extraction.
- **Interactive Loader:** Features a futuristic, custom-built 12-second SVG "Chip" loading animation with a 0% to 100% progress counter for a premium user experience.
- **One-Click Download:** Easily download the generated thumbnail directly to your device with a single click.
- **Immersive Matrix Background:** Includes a dynamic, auto-resizing Japanese Katakana matrix background animation that perfectly fits any screen size without horizontal scrolling.
- **Fully Responsive Design:** Optimized for all devices (Mobile, Tablet, and Desktop). Features touch-friendly buttons, adaptive typography, and Neumorphism-styled input boxes.

## Tech Stack

- **HTML5:** Semantic structure and SVG integration.
- **CSS3:** Flexbox, Grid, Media Queries, CSS Animations, Neumorphism UI, and Custom Gradients.
- **JavaScript (Vanilla):** DOM manipulation, URL parsing, dynamic background generation, and asynchronous loading simulations.

## How to Use

1. Open `index.html` in any modern web browser.
2. Paste a YouTube video link into the Neumorphism-styled input box.
3. Click the **Get Thumbnail** button.
4. Wait for the futuristic loading animation to complete (12 seconds).
5. Once the thumbnail appears, hover over the download button to see the tooltip and click it to save the image.

## Project Structure

- `index.html` - The main HTML file containing the structure and the SVG loader.
- `style.css` - Contains all the styling, animations, and mobile responsiveness logic.
- `script.js` - Handles the logic for parsing YouTube URLs, triggering the loader, generating the matrix background, and downloading the image.

## Credits

- UI components and animations inspired by designs from [Uiverse.io](https://uiverse.io/).
- Matrix background animation logic dynamically adjusts based on window size to ensure a flawless experience across all aspect ratios.
