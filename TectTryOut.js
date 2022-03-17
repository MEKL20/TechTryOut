// Create a function that accept two string parameter
// your function should be able to determine the first parameter is anagram with from the second parameter vice versa
// anagram will happen if the amount of each letter from first parameter is exactly equal with the second parameter and vice versa
// examples:
// anagram('aaz', 'zza') => false
// anagram('anagram', 'nagaram')) => true

function twoString(string1, string2){
    if (string1.length !== string2.length) return false

    let obj1 = {}
    for (let i = 0; i < string1.length; i++){
        if (!obj1[string1[i]]) {
            obj1[string1[i]] = 1
        }
        else{
            obj1[string1[i]]++
        }
    }

    let obj2 = {}
    for (let i = 0; i < string2.length; i++){
        if (!obj2[string2[i]]) {
            obj2[string2[i]] = 1
        }
        else{
            obj2[string2[i]]++
        }
    }


    for (let i = 0; i < string1.length; i++) {
        if (obj1[string1[i]] !== obj2[string1[i]]){
            return false
        }
    }

    return true
}

console.log(twoString("asdaa", "asiaa"))