let parsedData = [];
// Load and parse the TSV file
export const getParsedData = async () => {
  await fetch("/data.tsv")
    .then((res) => res.text())
    .then((text) => {
      const lines = text.split("\n").filter(Boolean);
      const headers = lines[0].split("\t");

      parsedData = lines.slice(1).map((line) => {
        const values = line.split("\t");
        return headers.reduce((obj, header, i) => {
          obj[header.trim()] = values[i]?.trim();
          return obj;
        }, {});
      });
    });
};

getParsedData();

// Function to get unique aimags
export const getAimagList = () => {
  const aimags = new Map();

  // Use a Map to track unique soums per aimag
  const aimagSoumMap = new Map();

  parsedData.forEach((row) => {
    const { aimagcode, aimagname, soumcode } = row;

    // Store aimag name
    if (!aimags.has(aimagcode)) {
      aimags.set(aimagcode, aimagname);
    }

    // Initialize set for soums if not present
    if (!aimagSoumMap.has(aimagcode)) {
      aimagSoumMap.set(aimagcode, new Set());
    }

    // Add soum to the set
    aimagSoumMap.get(aimagcode).add(soumcode);
  });

  // Build the final array with sumcnt
  return Array.from(aimags, ([code, name]) => ({
    code,
    name,
    childcnt: aimagSoumMap.get(code)?.size || 0,
  }));
};

// Function to get unique soums by aimag code
export const getSoumListByAimag = (aimagCode) => {
  const soums = new Map();
  parsedData
    .filter((row) => row.aimagcode === aimagCode)
    .forEach((row) => {
      if (!soums.has(row.soumcode)) {
        soums.set(row.soumcode, row.soumname);
      }
    });
  return Array.from(soums, ([code, name]) => ({ code, name }));
};

// Function to get bags by aimag and soum code
export const getBagListBySoum = (aimagCode, soumCode) => {
  return parsedData
    .filter((row) => row.aimagcode === aimagCode && row.soumcode === soumCode)
    .map((row) => ({
      code: row.bagcode,
      name: row.bagname,
    }));
};
