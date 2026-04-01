"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mb-3 mt-10 text-2xl font-bold text-foreground first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-2 mt-8 text-lg font-semibold text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-sm leading-relaxed text-muted">{children}</p>
  ),
  ul: ({ children }) => <ul className="mb-4 space-y-1.5">{children}</ul>,
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start text-sm leading-relaxed text-muted">
      <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
      <span>{children}</span>
    </li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-accent hover:underline"
    >
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-border">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="py-1.5 pr-4 text-left font-semibold text-foreground">
      {children}
    </th>
  ),
  tr: ({ children }) => (
    <tr className="border-b border-border last:border-0">{children}</tr>
  ),
  td: ({ children }) => <td className="py-1.5 pr-4 text-muted">{children}</td>,
  code: ({ className, children }) => {
    const isBlock = className?.startsWith("hljs") || className?.startsWith("language-");
    if (isBlock) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="rounded-md bg-tag-bg px-1.5 py-0.5 text-sm text-tag-text">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg border border-border bg-code-bg p-4 text-sm leading-relaxed">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-2 border-accent/30 pl-4 text-sm text-muted">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
};

export default function PostBody({ content }: { content: string }) {
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
