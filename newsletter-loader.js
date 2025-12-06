// Newsletter Dynamic Content Loader
// Loads newsletter content from markdown files managed by Decap CMS

class NewsletterLoader {
    constructor() {
        this.currentIssue = '2025-12'; // Default to current issue
        this.baseUrl = window.location.origin;
    }

    // Parse frontmatter from markdown
    parseFrontmatter(content) {
        const fmRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = content.match(fmRegex);

        if (!match) return null;

        const frontmatter = match[1];
        const body = match[2];

        return { frontmatter: this.parseYAML(frontmatter), body };
    }

    // Simple YAML parser for our specific structure
    parseYAML(yaml) {
        const data = {};
        const lines = yaml.split('\n');
        let currentKey = null;
        let currentArray = null;
        let currentObject = null;
        let indentLevel = 0;

        for (let line of lines) {
            const indent = line.search(/\S/);
            const trimmed = line.trim();

            if (!trimmed || trimmed.startsWith('#')) continue;

            // Top level key-value
            if (indent === 0 && trimmed.includes(':')) {
                const [key, ...valueParts] = trimmed.split(':');
                const value = valueParts.join(':').trim();
                currentKey = key.trim();

                if (value && value !== '>-') {
                    // Try to parse as appropriate type
                    if (value === 'true') data[currentKey] = true;
                    else if (value === 'false') data[currentKey] = false;
                    else if (!isNaN(value) && value !== '') data[currentKey] = Number(value);
                    else data[currentKey] = value.replace(/^['"]|['"]$/g, '');
                }
            }
        }

        return data;
    }

    // Fetch and parse newsletter
    async loadNewsletter(issue = this.currentIssue) {
        try {
            const response = await fetch(`/_newsletters/${issue}.md`);
            if (!response.ok) throw new Error('Newsletter not found');

            const content = await response.text();
            const parsed = this.parseFrontmatter(content);

            if (!parsed) throw new Error('Invalid newsletter format');

            return parsed.frontmatter;
        } catch (error) {
            console.error('Error loading newsletter:', error);
            return null;
        }
    }

    // Render newsletter to page
    async render() {
        const data = await this.loadNewsletter();
        if (!data) {
            console.error('Failed to load newsletter');
            return;
        }

        // Update issue badge
        const issueBadge = document.querySelector('.issue-badge');
        if (issueBadge && data.date) {
            issueBadge.textContent = `Current Issue: ${data.date}`;
        }

        console.log('Newsletter loaded successfully:', data.title);
        // Note: Full rendering would require parsing the complex nested structure
        // For now, the HTML content is static. The CMS allows editing for future issues.
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const loader = new NewsletterLoader();
        loader.render();
    });
} else {
    const loader = new NewsletterLoader();
    loader.render();
}
