function superbowlWin(record) {
  let win = record.find(play => play.result === "W");
  if (win) {
    return win.year;
  }
  return undefined;
}