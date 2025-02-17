export function generateToC(content: string) {
  const h1RegEx = /<h1.*?>(.*?)<\/h1>/g;
  const tocs = [];
  let modifiedHtml = content;

  let match;
  while ((match = h1RegEx.exec(content)) !== null) {
    const headingText = match[1];
    const id = headingText.toLowerCase().replace(/\s+/g, '-');

    tocs.push({ text: headingText, id });

    modifiedHtml = modifiedHtml.replace(match[0], `<h1 id="${id}">${headingText}</h1>`);
  }

  return { tocs, content: modifiedHtml };
}
