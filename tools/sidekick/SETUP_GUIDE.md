# Sidekick Library Setup & Implementation Guide

## Overview

The Sidekick Library extends the AEM Sidekick browser extension with a powerful blocks plugin that allows content authors to easily discover and copy block content structures without needing to remember syntax or search documentation.

## Architecture

### Directory Structure

```
tools/
└── sidekick/
    ├── config.json                 # Sidekick configuration
    ├── library.md                  # Library configuration spreadsheet (becomes library.xlsx)
    ├── README.md                   # This guide
    └── blocks/
        ├── header.md               # Header block variations
        ├── footer.md               # Footer block variations
        ├── hero.md                 # Hero block variations
        ├── service-cards.md        # Service cards variations
        ├── accordion.md            # Accordion variations
        ├── alert.md                # Alert variations
        ├── alert-banner.md         # Alert banner variations
        ├── breadcrumb.md           # Breadcrumb variations
        ├── card.md                 # Card variations
        ├── carousel.md             # Carousel variations
        ├── collapsible.md          # Collapsible variations
        ├── dialog.md               # Dialog variations
        ├── drawer.md               # Drawer variations
        ├── form.md                 # Form variations
        ├── gov-banner.md           # Gov banner variations
        ├── input-group.md          # Input group variations
        ├── pagination.md           # Pagination variations
        ├── patient-portal.md       # Patient portal variations
        ├── table.md                # Table variations
        ├── tabs.md                 # Tabs variations
        └── urgent-care.md          # Urgent care variations
```

## Setup Instructions

### Step 1: Create Content Mount Directory

1. In your Google Drive or SharePoint (depending on your setup), create a directory structure:
   ```
   /tools/sidekick/
   ```

2. This is where all library content will be stored and published.

### Step 2: Upload Block Library Documents

Each markdown file in `blocks/` represents a different block type. When uploaded to Google Drive or SharePoint, these become:
- Editable Google Docs or Word documents
- Published content that the library references

### Step 3: Configure fstab.yaml

Update your `fstab.yaml` to mount the content source:

```yaml
mountpoints:
  /: https://drive.google.com/drive/folders/YOUR_FOLDER_ID
  /tools: https://drive.google.com/drive/folders/TOOLS_FOLDER_ID
```

### Step 4: Publish Library Configuration

The `library.md` file must be converted to a spreadsheet format (Excel/Google Sheets) with:

**Sheet Name:** `helix-blocks`

**Columns:**
- `name` - Display name of the block
- `path` - Path to the block document (relative path, e.g., `/tools/sidekick/blocks/header`)

**Example Rows:**
| name | path |
|------|------|
| Header | /tools/sidekick/blocks/header |
| Footer | /tools/sidekick/blocks/footer |
| Hero | /tools/sidekick/blocks/hero |

Save this as `library.xlsx` or create as a Google Sheet.

### Step 5: Configure Sidekick

Update `tools/sidekick/config.json`:

```json
{
  "project": "USWDS Healthcare",
  "plugins": [
    {
      "id": "blocks",
      "title": "Blocks Library"
    }
  ],
  "libraries": [
    {
      "code": "https://cdn.jsdelivr.net/npm/aem-sidekick@latest/dist/library/index.js"
    }
  ]
}
```

## Block Document Format

Each block library document follows this structure:

### 1. Library Metadata Section

First section contains metadata table:

```
| name | description | type | searchtags |
|------|-------------|------|-----------|
| Block Name | Description of block | section/template | searchable,terms |
```

**Fields:**
- `name` - Display name in library
- `description` - Brief description shown in preview
- `type` - `section` (horizontal block) or `template` (page template)
- `searchtags` - Comma-separated search terms for discoverability

### 2. Block Variations

Each variation is separated by a markdown heading or section delimiter.

**For Google Docs:** Use section breaks between variations
**For Word:** Use page or section breaks
**For Markdown:** Use `---` (horizontal rules)

Example variation:

```markdown
## Variation 1: Basic Header

| Header |  |
|--------|--|
| Logo | Navigation Items |

### Description
Brief description of this variation.
```

### 3. Content Structure

Within each variation, use **table format** to define the block structure:

```
| Column 1 | Column 2 |
|----------|----------|
| Data | Data |
```

Authors will copy this table structure and paste it into their documents.

## Using the Sidekick Library

### For Content Authors

1. **Open Sidekick:**
   - Open a Google Doc or Word document
   - Click the AEM Sidekick browser extension
   - Wait for it to load

2. **Access Blocks Library:**
   - Click the "Blocks Library" button or plugin
   - The library panel opens showing all available blocks

3. **Search or Browse:**
   - Use the search box to find blocks by name or tags
   - Browse categories (Healthcare, Interactive, Data)
   - Click on a block to see variations

4. **Preview Block:**
   - Click on a variation to preview
   - See the exact structure and content
   - Read the description and usage notes

5. **Copy Block:**
   - Click the "Copy" button
   - The block structure is copied to clipboard
   - Paste into your document using Ctrl+V / Cmd+V

6. **Edit & Customize:**
   - Modify the pasted content as needed
   - Replace placeholder text with actual content
   - Save and publish through Sidekick

## Library Metadata Reference

### Standard Metadata

```
| name | description | type | searchtags |
|------|-------------|------|-----------|
| Block Name | What this block does | section | tag1, tag2, tag3 |
```

### Advanced Metadata

```
| Key | Value |
|-----|-------|
| name | Custom Block Name |
| description | Detailed description |
| type | section |
| searchtags | tag1, tag2, tag3 |
| tableHeaderBackgroundColor | #005ea2 |
| tableHeaderForegroundColor | #ffffff |
| contentEditable | true |
| disableCopy | false |
```

## Adding New Blocks

### 1. Create Block Document

Create a new file in `tools/sidekick/blocks/new-block.md` with:
- Library metadata table
- At least one variation example
- Clear content structure in table format

### 2. Update Library Configuration

Add entry to `library.xlsx` `helix-blocks` sheet:

```
| new-block | /tools/sidekick/blocks/new-block |
```

### 3. Publish Content

1. Upload to Google Drive/SharePoint
2. Publish using Sidekick
3. Verify in library preview

## Content Structure Guidelines

### Table-Based Blocks

Use tables to define content structure:

```
| Block Name | Content |
|------------|---------|
| Title | Description |
```

### List-Based Content

For lists, use markdown or table rows:

```
| Item 1 |
| Item 2 |
| Item 3 |
```

### Nested Structure

For complex blocks, show nesting with indentation or hierarchy:

```
| Parent Item |  |
|-------------|--|
| Child Item 1 | Description |
| Child Item 2 | Description |
```

### Links and CTAs

Represent links using markdown format within tables:

```
| [Link Text](/link-url) |
| [Button Text](/button-url) |
```

## Best Practices

### 1. Descriptive Names
- Use clear, user-friendly block names
- Avoid technical jargon
- Examples: "Hero Section", "Service Cards", "Contact Form"

### 2. Multiple Variations
- Provide 2-4 realistic variations per block
- Show different use cases
- Include common customizations

### 3. Complete Examples
- Include all required fields
- Show optional fields when relevant
- Use realistic placeholder content

### 4. Clear Descriptions
- Explain when to use each variation
- Note any dependencies or requirements
- Mention responsive behavior

### 5. Search Tags
- Add tags that authors would search for
- Include synonyms and related terms
- Use lowercase, comma-separated

### 6. Content Organization
- Keep related blocks together conceptually
- Use consistent naming patterns
- Follow healthcare industry terminology

## Troubleshooting

### Library Not Appearing

1. **Check config.json path** - Must be at `/tools/sidekick/config.json`
2. **Verify fstab.yaml** - Content mount must include `/tools` directory
3. **Publish content** - Documents must be published, not just drafted
4. **Clear Sidekick cache** - Restart browser or clear extension cache

### Copy Not Working

1. **Check content permissions** - Document must be readable
2. **Verify table format** - Block structure must be in valid table format
3. **Check browser console** - Look for JavaScript errors

### Blocks Not Showing

1. **Verify sheet name** - Must be exactly `helix-blocks` in library workbook
2. **Check paths** - Block paths must match actual document locations
3. **Republish** - Re-publish library configuration file

## Performance Considerations

### Caching

- Sidekick caches library content for 1 hour
- Force refresh: Clear browser cache or restart extension
- Changes take effect within 1 hour naturally

### File Size

- Keep block documents reasonably sized (< 50 variations per file)
- Split into multiple files if needed
- Better organization = better user experience

## Analytics & Usage

### Tracking Plugin Usage

The Sidekick emits events you can track:

```javascript
document.addEventListener('plugin-used', (event) => {
  console.log('Block copied:', event.detail);
});
```

### Monitoring Block Popularity

- Track which blocks are used most frequently
- Use this data to improve library organization
- Add variations for popular use cases

## Security & Permissions

### Access Control

- Library inherits permissions from content mount point
- Only published content is visible in library
- Authors need read access to see blocks

### Sensitive Content

- Don't include sensitive information in block examples
- Use placeholder text for real data
- Review before publishing to shared drives

## Advanced Customization

### Custom Plugins

Beyond the standard blocks plugin, you can create custom plugins:

1. Create new sheet in library workbook: `helix-custom-plugin`
2. Implement custom plugin JavaScript
3. Register in `config.json`

Reference: [Sidekick Customization Guide](https://www.aem.live/developer/sidekick-customization)

### Custom Styling

Customize library appearance:

1. Add `tableHeaderBackgroundColor` to library metadata
2. Update CSS variables in `tools/sidekick/config.json`
3. Match brand colors and accessibility standards

## Integration with AEM

### Repoless Authoring

If using repoless authoring:
- Library documents live in content repository
- No git commit needed
- Changes publish immediately

### With Universal Editor

For organizations using Universal Editor:
- Library integrates with editor
- Same block discovery workflow
- One unified authoring experience

## Support & Resources

- **AEM Documentation:** https://www.aem.live/docs/sidekick-library
- **GitHub Issues:** Report bugs and feature requests
- **Community Chat:** Join AEM.live Discord for support

## Summary Checklist

- [ ] Create `/tools/sidekick/` directory
- [ ] Create block library documents
- [ ] Create `library.xlsx` or Google Sheet
- [ ] Update `fstab.yaml` with mount points
- [ ] Configure `config.json`
- [ ] Publish all content
- [ ] Test in Sidekick preview environment
- [ ] Verify all blocks appear in library
- [ ] Train authors on library usage
- [ ] Establish maintenance schedule for updates

---

**Version:** 1.0  
**Last Updated:** December 2024  
**Status:** Ready for Production
