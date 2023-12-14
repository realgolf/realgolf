function generate_id(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, "-");
}

export function add_ids_to_headings(html_content: string): string {
  const modifiedHtmlCode = html_content.replace(
    /<(h[2-6])>(.*?)<\/\1>/gi,
    (_, heading, text) => {
      if (heading === "h1") {
        return `<${heading}>${text}</${heading}>`;
      }
      const id = generate_id(text);
      return `<${heading} id="${id}">${text}</${heading}>`;
    },
  );

  return modifiedHtmlCode;
}

export type TocItem = {
  text: string;
  id: string;
  level: string;
  parentId?: string;
  subheadings?: TocItem[];
};

export function get_table_of_contents(html_content: string): TocItem[] {
  const matches = html_content.match(/<(h[2-6])>(.*?)<\/\1>/gi);
  if (!matches) return [];

  const groupedToc: TocItem[] = [];
  let currentH2: TocItem | null = null;

  matches.forEach((match) => {
    const text = match.replace(/<\/?(h[2-6])>/g, "");
    const id = text.trim().toLowerCase().replace(/\s+/g, "-");
    const levelMatch = match.match(/<h(\d)>/i);
    const level = levelMatch ? `level-h${levelMatch[1]}` : "level-h2"; // Default to h2 if no match found

    if (level === "level-h2") {
      currentH2 = { text, id, level, parentId: undefined, subheadings: [] }; // Initialize subheadings as an empty array
      groupedToc.push(currentH2);
    } else if (currentH2) {
      currentH2.subheadings!.push({ text, id, level, parentId: currentH2.id });
    }
  });

  return groupedToc;
}
