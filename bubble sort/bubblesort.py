array = [2,5,6,1,2,3,7,1,2,6,3]

def main(arr):
  for i in range(len(arr)-1):
    for j in range(len(arr)-1):
      n1 = arr[j]
      n2 = arr[j+1]
      if(n1>n2):
        arr[j] = n2
        arr[j+1] = n1
  return arr

print(main(array))
