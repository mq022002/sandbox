from typing import List

"""
- Need to determine if given list contains any dupes
- Input, list of numbers being nums
- Output, boolean. True if there are dupes, false if there are no dupes
- Keep track of what numbers have been iterated through using a hash set I named `seen`. For every num in the list,
check it against what is currently in the set, and if it is there, return True, else, add it to the set. If no dupes found,
return False
"""


# start of submission
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False


# end of submission

arr1 = [1, 2, 3, 1]
arr2 = [1, 2, 3, 4]
arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
arr4 = []
arr5 = ["a", "a"]

solution = Solution()
print(solution.containsDuplicate(arr1))
print(solution.containsDuplicate(arr2))
print(solution.containsDuplicate(arr3))
print(solution.containsDuplicate(arr4))
print(solution.containsDuplicate(arr5))
