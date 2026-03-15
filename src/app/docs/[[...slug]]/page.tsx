import { source } from '@/lib/source';
import { DocsPage, DocsBody, DocsDescription, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';

/**
 * Determine the section based on the slug path
 */
function getSection(slug?: string[]): string {
  if (!slug || slug.length === 0) return 'user';
  const firstSegment = slug[0];
  if (firstSegment === 'developer') return 'developer';
  if (firstSegment === 'contributor') return 'contributor';
  return 'user';
}

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const section = getSection(params.slug);

  return (
    <div data-section={section} style={{ display: 'contents' }}>
      <DocsPage
        toc={page.data.toc}
        full={page.data.full}
        tableOfContent={{
          enabled: !page.data.full && page.data.toc.length > 0,
          // Use "clerk" style which has slanted/diagonal progress bar
          style: 'clerk',
        }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDXContent components={getMDXComponents()} />
        </DocsBody>
      </DocsPage>
    </div>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
