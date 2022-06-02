const doc = SpreadsheetApp.getActiveSpreadsheet();

function doPost(request) {
  applyRequest(request.parameter);
  const ssID = SpreadsheetApp.getActive().getId();
  const URL = 'https://docs.google.com/spreadsheets/d/'+ssID+'/export?format=xlsx';

  return ContentService.createTextOutput(JSON.stringify(URL));
}

function applyRequest(json) {
  const namedRanges = doc.getNamedRanges();
  var namedRangesList = [];
  for (var i = 0; i < namedRanges.length; i++) {
    namedRangesList.push(namedRanges[i].getName());
  }
  for(e in json) {
    if(namedRangesList.includes(e)){
      setFromRange(e, json[e]);
    }
  }
}

function setFromRange(rangeName, value) {
  return doc.getRangeByName(rangeName).setValue(value);
}
