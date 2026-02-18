/******************** 1️⃣ Beginner 1: getUserInitials ********************/
function getUserInitials(user) {
  return (user.firstName[0] + user.lastName[0]).toUpperCase();
}

/******************** 2️⃣ Beginner 2: countProperties ********************/
function countProperties(obj) {
  return Object.keys(obj).length;
}

/******************** 3️⃣ Beginner 3: invertObject ********************/
function invertObject(obj) {
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[obj[key]] = key;
    }
  }
  return result;
}

/******************** 4️⃣ Beginner 4: removeFalsyValues ********************/
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

/******************** 5️⃣ Easy 5: groupByAge ********************/
function groupByAge(people) {
  return people.reduce((acc, person) => {
    if (!acc[person.age]) acc[person.age] = [];
    acc[person.age].push(person);
    return acc;
  }, {});
}

/******************** 6️⃣ Easy 6: findMostFrequentElement ********************/
function findMostFrequentElement(arr) {
  const freq = {};
  let maxCount = 0;
  let mostFrequent = null;

  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxCount) {
      maxCount = freq[item];
      mostFrequent = item;
    }
  }
  return mostFrequent;
}

/******************** 7️⃣ Easy 7: flatten (any depth) ********************/
function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val)
      ? acc.concat(flatten(val))
      : acc.concat(val),
    []
  );
}

/******************** 8️⃣ Medium 8: mergeObjects (deep merge) ********************/
function mergeObjects(...objects) {
  const result = {};

  for (let obj of objects) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (
          typeof obj[key] === "object" &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          result[key] = mergeObjects(result[key] || {}, obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
  }
  return result;
}

/******************** 9️⃣ Medium 9: rotateArray ********************/
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  return [...arr.slice(-k), ...arr.slice(0, n - k)];
}

/******************** 🔟 Medium 10: intersection ********************/
function intersection(nums1, nums2) {
  const set2 = new Set(nums2);
  return [...new Set(nums1.filter(num => set2.has(num)))];
}

/******************** 1️⃣1️⃣ Medium 11: groupAnagrams ********************/
function groupAnagrams(words) {
  const map = {};

  for (let word of words) {
    const sorted = word.split('').sort().join('');
    if (!map[sorted]) map[sorted] = [];
    map[sorted].push(word);
  }

  return Object.values(map);
}

/******************** 1️⃣2️⃣ Medium-Hard: moveZerosToEnd (in-place) ********************/
function moveZerosToEnd(arr) {
  let insertPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos++] = arr[i];
    }
  }

  while (insertPos < arr.length) {
    arr[insertPos++] = 0;
  }

  return arr;
}

/******************** 1️⃣3️⃣ Hard: longestConsecutiveSequence ********************/
function longestConsecutiveSequence(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

/******************** 1️⃣4️⃣ Hard: productExceptSelf ********************/
function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

/******************** 1️⃣5️⃣ Hard: deepEqual ********************/
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" || obj1 === null ||
    typeof obj2 !== "object" || obj2 === null
  ) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

/******************** 1️⃣6️⃣ Hard: serialize & deserialize ********************/
function serializeObject(obj) {
  return JSON.stringify(obj, function (key, value) {
    if (value === undefined) {
      return { __type: "undefined" };
    }
    if (value instanceof Date) {
      return { __type: "Date", value: value.toISOString() };
    }
    if (value instanceof Map) {
      return { __type: "Map", value: Array.from(value.entries()) };
    }
    if (value instanceof Set) {
      return { __type: "Set", value: Array.from(value.values()) };
    }
    return value;
  });
}

function deserializeObject(str) {
  return JSON.parse(str, function (key, value) {
    if (value && value.__type === "undefined") {
      return undefined;
    }
    if (value && value.__type === "Date") {
      return new Date(value.value);
    }
    if (value && value.__type === "Map") {
      return new Map(value.value);
    }
    if (value && value.__type === "Set") {
      return new Set(value.value);
    }
    return value;
  });
}
