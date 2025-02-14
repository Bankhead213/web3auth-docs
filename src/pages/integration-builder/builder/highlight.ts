function highlightStart(fileContent: string, variableName: string): string {
  const contentByLine = fileContent.split(`\n`);
  for (let i = 0; i < contentByLine.length; i += 1) {
    if (contentByLine[i].includes(`HIGHLIGHTSTART-${variableName}`)) {
      contentByLine[i] = "// highlight-start";
    }
  }
  return contentByLine.join("\n");
}
function highlightEnd(fileContent: string, variableName: string): string {
  const contentByLine = fileContent.split(`\n`);
  for (let i = 0; i < contentByLine.length; i += 1) {
    if (contentByLine[i].includes(`HIGHLIGHTEND-${variableName}`)) {
      contentByLine[i] = "// highlight-end";
    }
  }
  return contentByLine.join("\n");
}

function removeHighlightCode(fileContent: string): string {
  // 2. line that this occurs on
  const contentByLine = fileContent.split(`\n`);
  for (let i = 0; i < contentByLine.length; i += 1) {
    if (contentByLine[i].includes("HIGHLIGHT")) {
      contentByLine.splice(i, 1);
    }
  }
  return contentByLine.join("\n");
}

function highlightSection(fileContent: string, variableName: string): string {
  const highlightStartFile = highlightStart(fileContent, variableName);
  const highlightedFile = highlightEnd(highlightStartFile, variableName);
  return removeHighlightCode(highlightedFile);
}

function highlight(stepIndex, filenames, files, steps) {
  const { pointer } = steps[stepIndex];
  const newFiles = files;
  if (pointer) {
    for (let i = 0; i < filenames.length; i++) {
      if (filenames[i] === pointer.filename) {
        newFiles[filenames[i]] = highlightSection(pointer.fileContent || files[filenames[i]], pointer.variableName);
      }
      newFiles[filenames[i]] = removeHighlightCode(files[filenames[i]]);
    }
  }

  return newFiles;
}

export default highlight;
