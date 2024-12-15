class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let first = head;
  let second = head;
  let counter = 1;
  while (counter <= k) {
    second = second.next;
    counter++;
  }
  if (second == null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}

/////////////////////////////////////////

const removeNthFromEnd = function (head, n) {
  let res = new ListNode(0, head);
  let dummy = res;

  for (let i = 0; i < n; i++) {
    head = head.next;
  }

  while (head) {
    dummy = dummy.next;
    head = head.next;
  }

  dummy.next = dummy.next.next;

  return res.next;
};
