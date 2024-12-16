const partition = function (head, x) {
  let before = new ListNode(0);
  let after = new ListNode(0);
  let beforeCurr = before;
  let afterCurr = after;

  while (head) {
    if (head.val < x) {
      beforeCurr.next = head;
      beforeCurr = beforeCurr.next;
    } else {
      afterCurr.next = head;
      afterCurr = afterCurr.next;
    }
    head = head.next;
  }

  afterCurr.next = null;
  beforeCurr.next = after.next;

  return before.next;
};
