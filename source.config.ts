import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { remarkAdmonition } from 'fumadocs-core/mdx-plugins';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { remarkCodeHike, recmaCodeHike, type CodeHikeConfig } from 'codehike/mdx';
import type { RawCode } from 'codehike/code';
import type { PluggableList } from 'unified';

export const docs = defineDocs({
  dir: 'content/docs',
});

const chConfig: CodeHikeConfig = {
  components: {
    code: 'Code',
  },
  ignoreCode: (r: RawCode) => r?.lang?.includes('math'),
  syntaxHighlighting: {
    theme: 'github-from-css',
  },
};

export default defineConfig({
  mdxOptions: {
    // Disable fumadocs' default code highlighting to let CodeHike handle it
    rehypeCodeOptions: false,
    remarkPlugins: [remarkMath, remarkAdmonition, [remarkCodeHike, chConfig]],
    rehypePlugins: v => [rehypeKatex, ...v],
    recmaPlugins: [[recmaCodeHike, chConfig], ...[]] as PluggableList,
  },
});
