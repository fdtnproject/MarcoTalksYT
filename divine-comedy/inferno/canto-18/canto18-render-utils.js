(function () {
  function slugify(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function flushParagraph(buffer, target) {
    if (!buffer.length) return;
    target.push({ type: "paragraph", text: buffer.join("\n") });
    buffer.length = 0;
  }

  function flushQuote(buffer, target) {
    if (!buffer.length) return;
    target.push({ type: "quote", lines: [...buffer] });
    buffer.length = 0;
  }

  function flushList(buffer, target) {
    if (!buffer.length) return;
    target.push({ type: "list", items: [...buffer] });
    buffer.length = 0;
  }

  function parseCantoMarkdown(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const document = {
      title: "",
      version: "",
      tagline: "",
      noteTitle: "",
      noteItems: [],
      sections: []
    };

    let currentSection = null;
    let paragraphBuffer = [];
    let quoteBuffer = [];
    let listBuffer = [];
    let inNoteBlock = false;

    function flushAll() {
      if (!currentSection) return;
      flushParagraph(paragraphBuffer, currentSection.items);
      flushQuote(quoteBuffer, currentSection.items);
      flushList(listBuffer, currentSection.items);
    }

    for (const rawLine of lines) {
      const line = rawLine.trimEnd();
      const trimmed = line.trim();

      if (line.startsWith("# ")) {
        document.title = line.slice(2).trim();
        continue;
      }

      if (!currentSection && trimmed === "Versione da palco") {
        document.version = trimmed;
        continue;
      }

      if (!currentSection && trimmed.startsWith("Linea guida:")) {
        document.tagline = trimmed.replace("Linea guida:", "").trim();
        continue;
      }

      if (!currentSection && trimmed === "Nota di lavoro:") {
        document.noteTitle = trimmed;
        inNoteBlock = true;
        continue;
      }

      if (!currentSection && inNoteBlock && trimmed.startsWith("- ")) {
        document.noteItems.push(trimmed.slice(2));
        continue;
      }

      if (line.startsWith("## ")) {
        flushAll();
        currentSection = {
          id: slugify(line.slice(3)),
          title: line.slice(3).trim(),
          items: []
        };
        document.sections.push(currentSection);
        inNoteBlock = false;
        continue;
      }

      if (!currentSection) {
        continue;
      }

      if (!trimmed) {
        flushParagraph(paragraphBuffer, currentSection.items);
        flushQuote(quoteBuffer, currentSection.items);
        flushList(listBuffer, currentSection.items);
        continue;
      }

      if (trimmed.startsWith("[Schermo:")) {
        flushParagraph(paragraphBuffer, currentSection.items);
        flushQuote(quoteBuffer, currentSection.items);
        flushList(listBuffer, currentSection.items);
        currentSection.items.push({
          type: "cue",
          text: trimmed.slice(1, -1)
        });
        continue;
      }

      if (trimmed.startsWith("> ")) {
        flushParagraph(paragraphBuffer, currentSection.items);
        flushList(listBuffer, currentSection.items);
        quoteBuffer.push(trimmed.slice(2));
        continue;
      }

      if (trimmed.startsWith("- ")) {
        flushParagraph(paragraphBuffer, currentSection.items);
        flushQuote(quoteBuffer, currentSection.items);
        listBuffer.push(trimmed.slice(2));
        continue;
      }

      flushQuote(quoteBuffer, currentSection.items);
      flushList(listBuffer, currentSection.items);
      paragraphBuffer.push(trimmed);
    }

    flushAll();
    return document;
  }

  function renderMultilineText(text) {
    return text
      .split("\n")
      .map((line) => `<span>${escapeHtml(line)}</span>`)
      .join("");
  }

  function escapeHtml(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  window.CANTO_RENDER_UTILS = {
    escapeHtml,
    parseCantoMarkdown,
    renderMultilineText,
    slugify
  };
})();

