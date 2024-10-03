def pascal_triangle(n):
    matrix = []
    for i in range(n):
        innerList = []
        for j in range(i + 1):
            if j == 0 or j == i:  # First and last elements are always 1
                innerList.append(1)
            else:
                # Sum the two elements from the previous row
                innerList.append(matrix[i - 1][j - 1] + matrix[i - 1][j])
        matrix.append(innerList)
    
    # Printing the result
    for row in matrix:
        print(row)

pascal_triangle(5)
