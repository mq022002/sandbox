from typing import List

"""
- Need to determine if given list contains any dupes
- Input, list of numbers being nums
- Output, boolean. True if there are dupes, false if there are no dupes
- Iterate through list and check number against all other numbers for every number in the lists
"""


# start of submission
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    return True
        return False


# end of submission

arr1 = [1, 2, 3, 1]
arr2 = [1, 2, 3, 4]
arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

solution = Solution()
print(solution.containsDuplicate(arr1))
print(solution.containsDuplicate(arr2))
print(solution.containsDuplicate(arr3))
