This node tool formats (indents) and sorts xliff files by <trans-unit> id attributes.

It uses xslt4node library: https://www.npmjs.com/package/xslt4node

The idea is to have a sorted translation file that will help developers to better track changes and/or update the translation file.

Pre-requisites:

    node-gyp:
        
        Windows: npm install -g windows-build-tools
    
        Mac: https://github.com/nodejs/node-gyp
        * python (v2.7 recommended, v3.x.x is not supported) (already installed on Mac OS X)
        * Xcode
            - You also need to install the Command Line Tools via Xcode. You can find this under the menu Xcode -> Preferences -> Downloads
            - This step will install gcc and the related toolchain containing make

    
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

Todo:

    Change "Usage" sections, file names no longer apply.

Future:

 * Hook it up in angular projects.
 * Use yarn instead of npm
 * Find a way to publish this tool to avoid the pre-requisites (https://sunzhongkui.wordpress.com/2013/07/26/create-and-publish-node-js-c-addon/)
