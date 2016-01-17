function myFunction() {

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var range = sheet.getRange('A:D');

    var numRows = range.getNumRows();
    var numCols = range.getNumColumns();
  
    var timeInColNum = 1;
    var timeOutColNum = 2
    var categoryColNum = 3;
    var categoryOptsCell = sheet.getRange("CategoryOptions");

    var row = 0;
    var col = 0;

    for (row = 1; row <= numRows; row++) {
      
      var timeInCell = range.getCell(row, timeInColNum);
      var timeOutCell = range.getCell(row, timeOutColNum);
      var categoryCell = range.getCell(row, categoryColNum);
      
      if(timeInCell.getValue() === ''){
        timeInCell.setValue(new Date());
        categoryCell.setValue(categoryOptsCell.getValue());
        return;
      }else if(timeOutCell.getValue() === ''){
        timeOutCell.setValue(new Date());
        
        //if there is no time out and the line item category matches the selected category, continue one more iteration to clock in the next activity
        if(categoryCell.getValue() !== categoryOptsCell.getValue()){
          continue;
        }
        return;
      }     
    } //for row
}
