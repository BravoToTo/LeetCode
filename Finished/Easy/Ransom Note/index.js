/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    for (let index = 0; index < ransomNote.length; index++) {
        i = magazine.search(ransomNote.substring(index, index+1));
        if (i === -1 ) {
            return false;
        }
        else {
            magazine = magazine.slice(0,i) + magazine.slice(i+1, magazine.length);
        }        
    }
    console.log(magazine);
    return true;
};