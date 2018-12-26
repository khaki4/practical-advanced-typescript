interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T>;
}

let node: LinkedListNode<string>;

interface Action {
  type: string;
}

// action1/state1 --> action2/state2 --> action3/state3
// 타임트레블 디버깅 하기에 링크드리스트는 최적의 데이터 스트럭쳐이다

type Nullable<T> = T | null;

interface ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;
}

let action1 = { type: "LOGIN" };
let action2 = { type: "LOAD_POSTS" };

let actionNode1: ListNode<Action> = {
  value: action1,
  next: null,
  prev: null
};

let actionNode2: ListNode<Action>= {
  value: action2,
  next: null,
  prev: actionNode1
};

actionNode1.next = actionNode2;

let currentNode: ListNode<Action> | null = actionNode2;

do {
  console.log(currentNode.value);
  currentNode = currentNode.prev;
} while (currentNode);