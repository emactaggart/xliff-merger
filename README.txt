This node tool formats (indents) and sorts xliff files by <trans-unit> id attributes.

It uses xslt4node library: https://www.npmjs.com/package/xslt4node

The idea is to have a sorted translation file that will help developers to better track changes and/or update the translation file.

Pre-requisites:

    Windows: npm install -g windows-build-tools
    Java 6 or JNI enabled in /Library/Java/JavaVirtualMachines/<version>.jdk/Contents/Info.plist

        <key>JVMCapabilities</key>
        <array>
            ...
            <string>JNI</string>
        </array>

Installation:

    Run: npm install 

Usage:

    input.xlf - is the translation input file, can be changed in xliff-formatter.js
    output.xlf - is the translation file sorted by <trans-unit> id, can be changed in xliff-formatter.js

    Run: node xliff-formatter.js

Future:
 * Hook it up in angular projects.
 * Use yarn instead of npm