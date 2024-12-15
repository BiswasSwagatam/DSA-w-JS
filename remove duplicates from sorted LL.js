const deleteDuplicates = function (head) {
  const dummy = new ListNode(0, head);
  let res = dummy;

  while (res.next != null && res.next.next != null) {
    if (res.next.val === res.next.next.val) {
      let dup = res.next.val;
      while (res.next != null && res.next.val === dup) {
        res.next = res.next.next;
      }
    } else {
      res = res.next;
    }
  }
  return dummy.next;
};
