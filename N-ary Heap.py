from collections import deque

class K_Heap:

    def __init__(self, k):
        self.k = k
        self.heap = []

    def __len__(self):
        return len(self.heap)

    def __bool_(self):
        return len(self.heap) > 0

    def display(self):
        queue = deque([0])
        lvl = 0
        while queue:
            level = []
            for _ in range(len(queue)):
                node = queue.popleft()
                level.append(node)
                for k in self.children(node):
                    queue.append(k)
            print(f'{lvl}: {level}')
            lvl += 1

    def append(self, element):
        self.heap.append(element)
        self.heapify_up(len(self.heap) - 1)

    def pop(self):
        assert self.heap
        self.swap(0, len(self.heap) - 1)
        result = self.heap.pop()
        self.heapify_down(0)
        return result

    def swap(self, a, b):
        self.heap[a], self.heap[b] = self.heap[b], self.heap[a]

    def heapify_down(self, index):
        next_index = self.local_min_node(index)
        while index != next_index:
            self.swap(index, next_index)
            index = next_index
            next_index = self.local_min_node(index)

    def local_min_node(self, index):
        for child_index in self.children(index):
            if self.heap[child_index] < self.heap[index]:
                index = child_index
        return index

    def heapify_up(self, index):
        parent = self.parent_index(index)
        while index != 0 and self.heap[index] < self.heap[parent]:
            self.swap(index, parent)
            index = parent
            parent = self.parent_index(index)

    def parent_index(self, index):
        return (index - 1) // self.k

    def children(self, index):
        for i in range(1, self.k+1):
            child_index = self.k * index + i
            if child_index < len(self.heap):
                yield child_index

heap = K_Heap(3)
for i in range(100, -1, -1):
    heap.append(i)
heap.display()