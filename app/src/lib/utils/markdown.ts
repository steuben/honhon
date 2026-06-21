/**
 * Simple Markdown to HTML converter for teaching content
 * Handles: **bold**, *italic*, lists, tables, line breaks
 */

export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Convert headings (must be done before bold/italic to avoid conflicts)
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>'); // Use h3 for ## in content
  html = html.replace(/^# (.+)$/gm, '<h2>$1</h2>');

  // Convert **text** to <strong>text</strong>
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Convert *text* to <em>text</em>
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Process line by line for lists and tables
  const lines = html.split('\n');
  let inList = false;
  let inTable = false;
  const processedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Check if this is a table line (contains | separators)
    const isTableLine = trimmedLine.startsWith('|') && trimmedLine.endsWith('|');
    const isTableSeparator = /^\|[\s\-:|]+\|$/.test(trimmedLine);

    if (isTableLine && !isTableSeparator) {
      if (!inTable) {
        processedLines.push('<table>');
        inTable = true;
      }

      // Parse table row
      const cells = trimmedLine
        .split('|')
        .slice(1, -1) // Remove first and last empty elements
        .map(cell => cell.trim());

      // Determine if this is a header row (first table row)
      const isHeader = inTable && processedLines[processedLines.length - 1] === '<table>';

      if (isHeader) {
        processedLines.push('<thead>');
        processedLines.push('<tr>');
        cells.forEach(cell => {
          processedLines.push(`<th>${cell}</th>`);
        });
        processedLines.push('</tr>');
        processedLines.push('</thead>');
        processedLines.push('<tbody>');
      } else {
        processedLines.push('<tr>');
        cells.forEach(cell => {
          processedLines.push(`<td>${cell}</td>`);
        });
        processedLines.push('</tr>');
      }
    } else if (isTableSeparator) {
      // Skip separator lines
      continue;
    } else {
      // Close table if we were in one
      if (inTable) {
        processedLines.push('</tbody>');
        processedLines.push('</table>');
        inTable = false;
      }

      // Handle list items
      if (trimmedLine.startsWith('- ')) {
        if (!inList) {
          processedLines.push('<ul>');
          inList = true;
        }
        const listContent = trimmedLine.substring(2);
        processedLines.push(`<li>${listContent}</li>`);
      } else {
        if (inList) {
          processedLines.push('</ul>');
          inList = false;
        }

        // Handle paragraphs
        if (trimmedLine === '') {
          if (i > 0 && lines[i - 1].trim() !== '') {
            processedLines.push('</p>');
          }
        } else if (trimmedLine.startsWith('<h') || trimmedLine.startsWith('</h')) {
          // Headings - don't wrap in paragraphs
          processedLines.push(line);
        } else if (!trimmedLine.startsWith('<')) {
          // Start new paragraph if not already in HTML tag
          const prevLine = i > 0 ? lines[i - 1].trim() : '';
          if (prevLine === '' || i === 0) {
            processedLines.push(`<p>${line}`);
          } else {
            processedLines.push(line);
          }
        } else {
          processedLines.push(line);
        }
      }
    }
  }

  // Close any open table
  if (inTable) {
    processedLines.push('</tbody>');
    processedLines.push('</table>');
  }

  // Close any open list
  if (inList) {
    processedLines.push('</ul>');
  }

  // Close any open paragraph
  const lastLine = processedLines[processedLines.length - 1];
  if (lastLine && !lastLine.endsWith('</p>') && !lastLine.endsWith('</ul>') && !lastLine.endsWith('</li>') && !lastLine.endsWith('</table>')) {
    processedLines.push('</p>');
  }

  html = processedLines.join('\n');

  return html;
}
