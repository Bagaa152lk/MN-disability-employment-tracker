export const numberFormat = (value, fixed = 0) => {
  if (value == null || isNaN(value)) return "";
  return value.toFixed(fixed).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertToTree = (flatData) => {
  const aimagMap = new Map();

  flatData.forEach(({ aimagcode, aimagname, soumcode, soumname, bagcode, bagname }) => {
    // Aimag level
    if (!aimagMap.has(aimagcode)) {
      aimagMap.set(aimagcode, {
        code: aimagcode,
        name: aimagname,
        children: [],
      });
    }

    const aimag = aimagMap.get(aimagcode);

    // Soum level
    let soum = aimag.children.find((s) => s.code === soumcode);
    if (!soum) {
      soum = {
        code: soumcode,
        name: soumname,
        children: [],
      };
      aimag.children.push(soum);
    }

    // Bag level
    if (!soum.children.find((b) => b.code === bagcode)) {
      soum.children.push({
        code: bagcode,
        name: bagname,
      });
    }
  });

  // Add childcnt fields
  for (const aimag of aimagMap.values()) {
    for (const soum of aimag.children) {
      soum.childcnt = soum.children.length;
    }
    aimag.childcnt = aimag.children.length;
  }

  return Array.from(aimagMap.values());
};

export const getSoumListByAimag = (treeData, aimagCode) => {
  const aimag = treeData.find((a) => a.code === aimagCode);
  if (!aimag) return [];

  return aimag.children.map((soum) => ({
    code: soum.code,
    name: soum.name,
    childcnt: soum.children?.length || 0,
  }));
};

export const getBagListBySoum = (treeData, aimagCode, soumCode) => {
  const aimag = treeData.find((a) => a.code === aimagCode);
  if (!aimag) return [];

  const soum = aimag.children.find((s) => s.code === soumCode);
  if (!soum) return [];

  return soum.children.map((bag) => ({
    code: bag.code,
    name: bag.name,
  }));
};

