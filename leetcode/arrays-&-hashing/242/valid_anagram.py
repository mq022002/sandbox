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
        char_array_s = list(s)
        count_map_s = {}
        char_array_t = list(t)
        count_map_t = {}

        for char_s in char_array_s:
            if char_s in count_map_s:
                count_map_s[char_s] += 1
            else:
                count_map_s[char_s] = 1

        for char_t in char_array_t:
            if char_t in count_map_t:
                count_map_t[char_t] += 1
            else:
                count_map_t[char_t] = 1

        print(count_map_s)
        print(count_map_t)

        if count_map_s == count_map_t:
            return True
        return False


# end of submission

s, t = "anagram", "nagaram"
s2, t2 = "rat", "car"

solution = Solution()
print(solution.isAnagram(s=s, t=t))
print(solution.isAnagram(s=s2, t=t2))

# === Examples

"""
# Count the occurrences of each element in a list
elements = ["apple", "banana", "apple", "orange", "banana", "apple"]
count_map = {}

for element in elements:
    if element in count_map:
        count_map[element] += 1
    else:
        count_map[element] = 1

print(count_map)  # Output: {'apple': 3, 'banana': 2, 'orange': 1}

# ===

# Convert a string to an array (list) of characters
string = "example"
char_array = list(string)

print(char_array)  # Output: ['e', 'x', 'a', 'm', 'p', 'l', 'e']
"""
