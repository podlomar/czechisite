import { promises as fs } from 'fs';
import path from 'path';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

const baseDir = process.argv[2];
const indexFile = path.join(baseDir, 'index.md');
const content = await fs.readFile(indexFile, 'utf-8');

const markdown = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeStringify);

const vfile = await markdown.process(content);

console.info(vfile.value);
