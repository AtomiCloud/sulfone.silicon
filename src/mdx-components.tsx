import { Code } from '@/components/mdx/code';
import { Mermaid } from '@/components/mdx/mermaid';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { ReactNode, ReactElement } from 'react';

// Helper to check if children contain a link
function containsLink(children: ReactNode): boolean {
  if (!children) return false;
  if (Array.isArray(children)) {
    return children.some(child => containsLink(child));
  }
  if (typeof children === 'object' && children !== null && 'type' in children) {
    const element = children as ReactElement<{ children?: ReactNode }>;
    if (element.type === 'a' || (typeof element.type === 'function' && element.type.name === 'Link')) {
      return true;
    }
    if (element.props?.children) {
      return containsLink(element.props.children);
    }
  }
  return false;
}

// Custom heading that doesn't wrap with anchor if children already contain a link
function createHeading(level: 2 | 3 | 4 | 5 | 6) {
  const HeadingComponent = defaultMdxComponents[`h${level}`];

  return function CustomHeading({ children, ...props }: { children?: ReactNode; id?: string }) {
    // If children contain a link, render without the fumadocs anchor wrapper
    if (containsLink(children)) {
      const Tag = `h${level}` as const;
      return (
        <Tag {...props} className="scroll-m-20">
          {children}
        </Tag>
      );
    }
    // Otherwise use the default fumadocs heading with anchor
    if (HeadingComponent) {
      return <HeadingComponent {...props}>{children}</HeadingComponent>;
    }
    const Tag = `h${level}` as const;
    return <Tag {...props}>{children}</Tag>;
  };
}

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Mermaid,
    Code: Code as unknown,
    ...components,
  } as MDXComponents;
}
