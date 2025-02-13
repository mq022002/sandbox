"""
- Need to determine if 2 strings are an anagram of each other
- input, s as string, t as string
- output, boolean. True if anagram, false if not
- We can just consider both strings, to be an array delimited by a comma
- Iterate over each character within the first array, and count the occurences for each unique (a appears 3 times, count it 3 times)
- Might need to use a hash map (dictionary)
- The hashmap may look like this(?):
{
    "a": 3,
    "n": 1,
    "g": 1,
    "r": 1,
    "m": 1
}
- Then, we consider the 2nd string. We do the exact same thing, and then compare the numbers against each other
"""


# start of submission
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return


# end of submission

s, t = "anagram", "nagaram"
s2, t2 = "rat", "car"

solution = Solution()
print(solution.isAnagram(s=s, t=t))
print(solution.isAnagram(s=s2, t=t2))
