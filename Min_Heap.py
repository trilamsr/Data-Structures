class Min_Heap:
    def __init__(self, arr):
        self.size = len(arr)
        self.array = self.min_heapify(arr)
    
    def __len__(self):
        return self.size

    def swap(self, arr, a, b):
        arr[a], arr[b] = arr[b], arr[a]
    
    def left_child_index(self, curI, arr):
        ret = curI*2+1
        return ret if ret < self.size else None

    def right_child_index(self, curI, arr):
        ret = curI*2+2
        return ret if ret < self.size else None

    def parent_index(self, curI):
        if curI == 0: return None
        ret = (curI-1)//2
        return ret

    def min_index(self, arr, cur, left, right):
        ret = cur
        if left and arr[left] < arr[ret]:
            ret = left
        if right and arr[right] < arr[ret]:
            ret = right
        return ret

    def min_heapify(self, arr):
        start = self.size//2
        for i in range(start, -1, -1):
            self.heapify_down(i, arr)
        return arr

    def heapify_down(self, cur, arr):
        le = self.left_child_index(cur)
        ri = self.right_child_index(cur)
        min_index = self.min_index(arr, cur, le, ri)
        if cur == min_index: return
        else:
            self.swap(arr, cur, min_index)
            self.heapify_down(min_index, arr)

    def heapify_up(self, cur_index):
        parent_index = self.parent_index(cur_index)
        if parent_index and self.heap[parent_index] > self.heap[cur_index]:
            self.swap(self.heap, parent_index, cur_index)
            self.heapify_up(parent_index)

    def min_element(self):
        return self.array[0]

    def insert(self, element):
        if self.size < len(self.array):
            self.array[self.size] = element
        else:
            self.array.append(element)
        self.size+=1
        self.heapify_up(self.size-1)

    def extract_min(self):
        if not self.array: return
        self.swap(self.array, 0, self.size-1)
        ret = self.array[self.size-1]
        self.size-=1
        if self.array: self.heapify_down(0, self.array)
        return ret
    
    def heap_sort(self):
        for i in range(self.size-1, -1, -1):
            self.swap(self.array, 0, i)
            self.size -= 1
            self.heapify_down(0, self.array)
        print(self.array)



x = [5,2,7,1,9,0,7,3,4,6]
aloha = Min_Heap(x)
print(aloha.array)
print(aloha.extract_min())
print(aloha.array)
aloha.heap_sort()