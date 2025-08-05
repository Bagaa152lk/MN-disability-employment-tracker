let parsedData = [];

// Load and parse the JSON file
export const getParsedData = async () => {
  const res = await fetch("/data.json");
  parsedData = await res.json();
};

// getParsedData();

// Get unique aimags with soum count
export const getAimagList = () => {
  const aimags = new Map();
  const aimagSoumMap = new Map();

  parsedData.forEach(({ aimagcode, aimagname, soumcode }) => {
    if (!aimags.has(aimagcode)) {
      aimags.set(aimagcode, aimagname);
    }

    if (!aimagSoumMap.has(aimagcode)) {
      aimagSoumMap.set(aimagcode, new Set());
    }

    aimagSoumMap.get(aimagcode).add(soumcode);
  });

  return Array.from(aimags, ([code, name]) => ({
    code,
    name,
    childcnt: aimagSoumMap.get(code)?.size || 0,
  }));
};

// Get soums and count of bags in each
export const getSoumListByAimag = (aimagCode) => {
  const soums = new Map();
  const soumBagCount = new Map();

  parsedData
    .filter((row) => row.aimagcode === aimagCode)
    .forEach(({ soumcode, soumname, bagcode }) => {
      if (!soums.has(soumcode)) {
        soums.set(soumcode, soumname);
        soumBagCount.set(soumcode, new Set());
      }
      soumBagCount.get(soumcode).add(bagcode);
    });

  return Array.from(soums, ([code, name]) => ({
    code,
    name,
    childcnt: soumBagCount.get(code)?.size || 0,
  }));
};

// Get list of bags in a specific soum
export const getBagListBySoum = (aimagCode, soumCode) => {
  return parsedData
    .filter((row) => row.aimagcode === aimagCode && row.soumcode === soumCode)
    .map(({ bagcode, bagname }) => ({
      code: bagcode,
      name: bagname,
    }));
};
