# Healthcare Blocks Library

## Blocks Library Overview

This directory contains all block examples and variations for the USWDS Healthcare website. Each block has its own document with multiple variations.

### Structure

- `library.xlsx` - Main library configuration linking to all block documents
- `blocks/` - Block examples and variations
  - `header.md` - Header/navigation block variations
  - `footer.md` - Footer block variations
  - `hero.md` - Hero block variations
  - `service-cards.md` - Service cards block variations
  - `buttons.md` - Button utility variations
  - `forms.md` - Form block variations
  - `and more...`

### Library Metadata

Each block document includes library metadata in its first section to help the Sidekick Library categorize and display blocks properly.

### How to Add New Blocks

1. Create a new document in the `blocks/` folder with the block name
2. Add library metadata as the first section
3. Add multiple variations separated by section delimiters
4. Add an entry to `library.xlsx` with the block name and path
5. Publish the content

### Using the Library in Sidekick

1. Open a document in Google Docs or Microsoft Word
2. Open the AEM Sidekick browser extension
3. Click the "Blocks Library" option
4. Browse or search for a block
5. Click to preview the block
6. Click "Copy" to copy the block structure to your clipboard
7. Paste into your document

---

## Library Configuration File Format

The `library.xlsx` file has a sheet called `helix-blocks` with two columns:
- `name` - Display name of the block
- `path` - Path to the block document (e.g., `/tools/sidekick/blocks/header`)

Example:
| name | path |
|------|------|
| Header | /tools/sidekick/blocks/header |
| Footer | /tools/sidekick/blocks/footer |
| Hero | /tools/sidekick/blocks/hero |
| ...   | ... |
