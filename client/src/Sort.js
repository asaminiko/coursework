function binarySearchByPriority(arr, value, start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid].priority < value.priority) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return start
}
//Використовується сортування вставкою з використанням бінарного пошуку.
export function binaryInsertionSortByPriority(arr) {
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i]
    let start = 0
    let end = i
    const position = binarySearchByPriority(arr, value, start, end)

    for (let j = i; j > position; j--) {
      arr[j] = arr[j - 1]
    }

    arr[position] = value
  }

  return arr
}
