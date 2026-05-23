// ═══════════════════════════════════════════════════════════════
// GENDER REVEAL ESCAPE ROOM — Google Apps Script Backend
// Deploy as: Web App → Execute as: Me → Who has access: Anyone
// ═══════════════════════════════════════════════════════════════

const SHEET_NAME = 'BabyReveal';

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Action', 'Quest1', 'Quest2', 'Quest3', 'Quest4', 'Words', 'Revealed']);
    sheet.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#f0c060');
  }

  if (data.action === 'save') {
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      'progress',
      data.completed['1'] ? '✅' : '⬜',
      data.completed['2'] ? '✅' : '⬜',
      data.completed['3'] ? '✅' : '⬜',
      data.completed['4'] ? '✅' : '⬜',
      Object.values(data.collectedWords || {}).join(', '),
      ''
    ]);
  }

  if (data.action === 'reveal') {
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      '🎉 REVEALED!',
      '✅', '✅', '✅', '✅',
      'TINY · LOVE · WELCOME · BABY',
      '💗 IT\'S A GIRL!'
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    return ContentService
      .createTextOutput(JSON.stringify({ rows: [] }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const rows = sheet.getDataRange().getValues();
  return ContentService
    .createTextOutput(JSON.stringify({ rows }))
    .setMimeType(ContentService.MimeType.JSON);
}
