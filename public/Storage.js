const getReadData = () => {
  const storedData = localStorage.getItem("read-data");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const saveReadData = (id) => {
  const storedData = getReadData();
  const ifExists = storedData.find((Id) => Id === id);

  if (!ifExists) {
    storedData.push(id);
    localStorage.setItem("read-data", JSON.stringify(storedData));
  }
};

const getWLData = () => {
  const storedData = localStorage.getItem("WL-data");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const saveWLData = (id) => {
  const storedData = getWLData();
  const ifExists = storedData.find((Id) => Id === id);

  if (!ifExists) {
    storedData.push(id);
    localStorage.setItem("WL-data", JSON.stringify(storedData));
  }
};

export { saveReadData, getReadData, saveWLData, getWLData };
