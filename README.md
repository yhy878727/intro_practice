# Nina Huang — Human & Tech

Standalone version of design 4 (Human & Tech), based on Wix template 3007. It has no design switcher bar.

## Pages

- `index.html` — home
- `about.html` — About Me
- `work.html` — Projects, including the two project detail dialogs

All page text is written directly in these HTML files. To change a sentence, edit it in the HTML.

## Files

- `index.html`, `about.html`, `work.html`: page content.
- `style.css`: colors, fonts, layout, and mobile styles.
- `app.js`: opens and closes the project dialogs, opens the visitor's email app from the Contact button, and expands career entries when printing. It contains no page text.
- `assets/about-care-to-technology-soft.jpg`: illustration on the About Me page.
- `assets/project-service-operations.jpg` and `assets/project-device-reading.jpg`: illustrations for the two project cards.

## Using it

Keep the files in the same relative locations and open `index.html` in a browser. No packages or build steps are needed. For GitHub Pages, upload the whole folder to the repository root.

Fonts load from Google Fonts and need an internet connection. Without one, the browser uses system fonts. The Contact button opens the visitor's email app. The email address is not written in the HTML; `app.js` puts it together when the button is clicked, which keeps it away from bots that collect addresses.
