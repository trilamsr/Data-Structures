class Max_Heap:
    def __init__(self, arr):
        self.size = len(arr)
        self.heap = self.build_max_heap(arr)

    def left_index(self, i):
        ret = 2*i+1
        return ret if ret < self.size else None

    def right_index(self, i):
        ret = 2*i+2
        return ret if ret < self.size else None

    def parent_index(self, i):
        ret = (i-1)//2
        return ret

    def max_index(self, cur, left, right, arr):
        ret = cur
        if left and arr[left] > arr[ret]: ret = left
        if right and arr[right] > arr[ret]: ret = right
        return ret

    def swap(self, a,b, arr):
        arr[a], arr[b] = arr[b], arr[a]

    def build_max_heap(self, arr):
        start = self.size//2
        for i in range(start, -1, -1):
            self.max_heapify_down(i, arr)
        return arr

    def max_heapify_down(self, cur_index, arr):
        left_index = self.left_index(cur_index)
        right_index = self.right_index(cur_index)
        max_index = self.max_index(cur_index, left_index, right_index, arr)
        if max_index != cur_index:
            self.swap(cur_index, max_index, arr)
            self.max_heapify_down(max_index, arr)

    def max_heapify_up(self, cur_index):
        parent_index = self.parent_index(cur_index)
        if cur_index and self.heap[cur_index] > self.heap[parent_index]:
            self.swap(cur_index, parent_index, self.heap)
            self.max_heapify_up(parent_index)

    def insert(self, element):
        if self.size < len(self.heap):
            self.heap[self.size] = element
        else:
            self.heap.append(element)
        self.size+=1
        self.max_heapify_up(self.size-1)


# ---------------------------------------------------------------------
def heap_sort(arr):
    heap = Max_Heap(arr)
    for i in range(heap.size-1, -1, -1):
        print(i)
        heap.swap(0, i, heap.heap)
        heap.size -= 1
        heap.max_heapify_down(0, heap.heap)

x = [5,2,7,1,9,0,7,3,4,6]

heap_sort(x)
print(x)