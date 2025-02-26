from typing import List

"""
- For a given target, we must find what combination of 2 numbers within an array add up to the target
- With a valid combination, we print out the indices that those numbers are located at
- There should only be 1 solution within the array of elements that adds up to the target so ensure that is reflected in test cases
- Inputs, array of numbers and a target number
- Output, array of indices
- We can brute force with a double for loop to iterate through the array, then another loop to iterate over the array again. We need to ensure that the number isn't repeated so we need to start the index +1
- As we iterate, we add the number in the next index. If that number is == to the target, then return the indices. If not, then continue to iterate
- Arithmetic stuff should probably just take place using the indices to make it easier to understand where in the array we are, and to make the output easy as well
"""


# start of submission
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[j] == target - nums[i]:
                    return [i, j]
        return


# end of submission

arr1 = [2, 7, 11, 15]
target1 = 9
arr2 = [3, 2, 4]
target2 = 6
arr3 = [3, 3]
target3 = 6

solution = Solution()
print(solution.twoSum(arr1, target1))
print(solution.twoSum(arr2, target2))
print(solution.twoSum(arr3, target3))
