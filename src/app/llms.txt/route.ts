import { source } from '@/lib/source';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Configure for static export
export const dynamic = 'force-static';
export const revalidate = 3600;

async function getFilesRecursively(dir: string, baseDir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await getFilesRecursively(fullPath, baseDir);
      files.push(...subFiles);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

export async function GET() {
  const pages = source.getPages();
  let content = '# CyanPrint Documentation\n\n';
  content += 'This is the comprehensive documentation for CyanPrint, a powerful artifact management system.\n\n';
  content += '---\n\n';

  // Create a map of URLs to page data
  const pageMap = new Map<string, { title: string; description: string }>();
  for (const page of pages) {
    pageMap.set(page.url, {
      title: page.data.title || 'Untitled',
      description: page.data.description || '',
    });
  }

  // Get all markdown files
  const docsDir = join(process.cwd(), 'content', 'docs');
  const files = await getFilesRecursively(docsDir, docsDir);

  for (const filePath of files) {
    // Get the relative path from docs dir
    const relativePath = filePath.replace(`${docsDir}/`, '');

    // Derive URL from file path
    const urlPath = relativePath.replace(/\.(mdx?|md)$/, '').replace(/\/index$/, '');

    const url = `/docs/${urlPath}`;

    const pageInfo = pageMap.get(url);

    if (pageInfo) {
      content += `## ${pageInfo.title}\n\n`;
      if (pageInfo.description) {
        content += `${pageInfo.description}\n\n`;
      }
      content += `URL: ${url}\n\n`;

      try {
        const rawContent = await readFile(filePath, 'utf-8');
        // Remove frontmatter from the content
        const contentWithoutFrontmatter = rawContent.replace(/^---\n[\s\S]*?\n---\n\n?/, '');
        content += contentWithoutFrontmatter;
      } catch {
        content += '\n*Content could not be loaded*\n';
      }

      content += '\n\n---\n\n';
    }
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
