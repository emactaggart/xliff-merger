This node tool sorts xliff file by <trans-unit>s id attributes.

The idea is to have a sorted translation file that will help developers to better track changes and/or update the translation file.

Pre-requisites:

    Windows: npm install -g windows-build-tools
    Mac: unknown

Installation:

    Run: npm install 

Usage:

    input.xlf - is the translation input file, can be changed in xliff-formatter.js
    output.xlf - is the translation file sorted by <trans-unit> id, can be changed in xliff-formatter.js

    Run: node xliff-formatter.js

Future:
 * Hook it up in angular projects.
 * Use yarn instead of npm