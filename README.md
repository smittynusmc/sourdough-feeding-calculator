# Sourdough Feeding Calculator

A tiny installable web app based on Jim's original SwiftUI sourdough feeding calculator.

## Features

- Ratios: 1:1:1, 1:2:2, 1:2:3, 1:3:3, 1:4:4, 1:5:5, 1:10:10
- One starter-weight input
- Calculates water, flour, and total starter
- Works offline after the first successful load
- Installable to an iPhone Home Screen
- No account, database, tracking, or saved personal data

## Ratio interpretation

Ratios are interpreted as **starter : water : flour**, matching the supplied SwiftUI code.

Example: 100 g starter at 1:2:3 -> 200 g water + 300 g flour = 600 g total.

## Install on iPhone

1. Open the deployed site in Safari.
2. Tap Share.
3. Tap **Add to Home Screen**.
4. Open **Sourdough** from the Home Screen.

After the app has loaded successfully once, the cached calculator can work offline.

## GitHub Pages

This repository includes a GitHub Pages workflow. In GitHub repository settings, go to **Settings -> Pages** and set **Source** to **GitHub Actions**. Future pushes to `main` will deploy automatically.
