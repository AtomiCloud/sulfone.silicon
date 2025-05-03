import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { remarkAdmonition } from 'fumadocs-core/mdx-plugins';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { remarkCodeHike, recmaCodeHike, type CodeHikeConfig } from 'codehike/mdx';
import type { RawCode } from 'codehike/code';

export const docs = defineDocs({
  dir: 'content/docs',
});

const chConfig: CodeHikeConfig = {
  components: {
    code: 'Code',
  },
  ignoreCode: (r: RawCode) => r?.lang?.includes('math'),
};

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkAdmonition, [remarkCodeHike, chConfig]],
    rehypePlugins: v => [rehypeKatex, ...v],
    recmaPlugins: [[recmaCodeHike, chConfig]],
  },
});
