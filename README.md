# Krem Chympe — Informational Site

A purely informational site: The Place, The Founder, Activities, Gallery,
Safety & Season, and a WhatsApp enquiry button. No booking flow.

## THE ONLY FILE YOU NEED TO EDIT: content.js

Every sentence, every photo path, every link on the site is a plain-text
field in `content.js`, with comments explaining each one. Open it in any
text editor (Notepad, TextEdit, VS Code, even GitHub's own editor) and:

- Change text between "double quotes"
- Add a new list item (a gallery photo, an activity card, a safety line)
  by copying an existing `{ ... },` block and editing the copy
- Remove one by deleting its whole `{ ... },` block
- Swap a photo by putting a new file in `images/` and typing its filename

You never need to open `index.html`, `styles.css`, or `script.js` to
change what the site says or shows. Those three files just do the layout
and design — they read everything from `content.js` automatically.

## Files
- `content.js`  — **edit this one.** All text, images, and links.
- `index.html`  — page structure/layout (rarely needs touching)
- `styles.css`  — visual design: colors, fonts, spacing
- `script.js`   — reads content.js and builds the page + interactivity
- `images/`     — all photos used on the site

## If something looks broken after an edit
Open the page in Chrome, tap the three-dot menu → More tools →
Developer tools → Console tab. If you left out a quote mark or a comma
in content.js, an error will show there telling you roughly which line.
The safest fix is to compare your edit against a backup copy of
content.js saved before you started.

## Note on the cave-diving photo
One photo from the original folder had another photographer's visible
credit on it, so it isn't used here. "Cave Diving" is listed as a text
tag with no photo for now — add your own photo to `images/`, then move
it from `activities.alsoHere` into `activities.cards` in content.js.

## Hosting
Static site — upload all files (including the `images/` folder) to any
static host: GitHub Pages, Netlify, or your existing web host. No server
or build step required.
