# Expo Linking.getInitialURL() - Inconsistent null return on Android

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where the function inconsistently returns `null` on Android devices, even when a deep link is successfully opened.  This behavior is not consistent with iOS.

The issue causes unreliability in deep link handling, as the app cannot determine if it was launched from a deep link or not.

## Steps to Reproduce

1. Clone this repository.
2. Run the app on both Android and iOS emulators/devices.
3. Open a deep link targeting the app on both platforms.
4. Observe that on Android, `getInitialURL()` sometimes returns `null`, while it reliably returns the URL on iOS.

## Proposed Solution

The solution involves using a more robust approach to handling initial URLs, potentially combining `getInitialURL()` with event listeners to capture the deep link after the app fully loads.  See `bugSolution.js` for a possible implementation.