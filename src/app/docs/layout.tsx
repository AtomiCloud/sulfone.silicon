import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        defaultOpenLevel: 10,
        tabs: {
          transform: (option, node) => ({
            ...option,
            icon: <span data-tab-section={String(option.title ?? '').toLowerCase()}>{node.icon}</span>,
          }),
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
