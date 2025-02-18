const reader = require("xlsx");

const readData = (filePath) => {
  let data = [];

  const file = reader.readFile(filePath);
  const sheets = file.SheetNames; //array
  //a//b//c
  for (let i = 0; i < sheets.length; i++) {
    //0th
    const temp = reader.utils.sheet_to_json(
      file.Sheets[file.SheetNames[i]]
      
    );

    temp.forEach((res) => {
      data.push(res);
    });
  }

  return data;
};

module.exports = readData
