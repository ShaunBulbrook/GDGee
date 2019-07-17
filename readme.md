# GDGee

This is the source code written during a talk given at https://www.meetup.com/GDG-Reading-Thames-Valley/events/262643654/

Feel free to rip/copy/modify this however you like!

## Getting Started

To run this function without installation, ensure you have [node.js](https://nodejs.org/en/) installed and run `npx gdgee get http://example.com`

To install locally, `npm install -g gdgee` then run `gdgee get http://example.com`.

## Developing

Clone this repository, then run `npm install` from the project folder. Once you've installed dependencies, play around with the script. To test changes without publishing, run `npm install -g` from the project root folder. This will make `gdgee` available in your local path.

Alternatively run: `node getPage.js get http://example.com` to test from the project root. 

Run `npm publish` to publish to npm. (Keep in mind that you will need to update the Project name and version number!)

## Resources

The resources on the final slide of the presentation were:

- Commander - https://www.npmjs.com/package/commander

Enhancements:

- Chalk - https://www.npmjs.com/package/chalk
- CLI Progress - https://www.npmjs.com/package/cli-progress
- NPM docs - https://docs.npmjs.com/

Other items of interest:

- Github package registry - https://github.com/features/package-registry
- Verdaccio -  https://verdaccio.org
