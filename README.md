## INTRO 
jDOM is a nice little library that makes DOM manipulation easier,
it works in the browser, and it is compatible with the "jsdom" package on NPM.

## INSTALLATION
Run this command to install jDOM:

	npm install @andrewfeasel/jdom

## IMPORTING
jDOM uses ES Module syntax, so put type="module" in package.json,
or in your script tag. Imports look like this:

	import $J from "./jDOM.js";

## USAGE
	$J.setWindow(window: Window): void
Sets jDOM's internal window to a given Window object.
Only useful in Node.js and when using "jsdom", useless for the browser.
setWindow() must be called before any other methods are called in Node.

	$J.parse(data: string, mimeType: string): Document
Parses the serialized data, and returns a Document.
Valid types are "text/html" and "text/xml".

	$J.create(htmlText: string): HTMLElement
Creates an HTML element from the text.

	$J.ready(eventCallback: function): void
Executes the callback when the "DOMContentLoaded" event fires.

	$J.id(elementId: string): Element | null
jDOM shorthand for document.getElementByid()

	$J.one(selector: string, base?: Element): Element | null
Identical to document.querySelector, but you can optionally specify which object
you call querySelector on: defaults to document.

	$J.all(selector: string, base?: Element): Array<Element> | null
document.querySelectorAll(), but with an optional base, and returns an Array of elements.

## CONTRIBUTING

Make a pull request, and I will happily review it. I am always open for pull requests,
because I value your ideas and contributions, and I value the open-source community.

## LICENSE

MIT license applies here.
