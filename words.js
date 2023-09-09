const adj = ['avid', 'dull', 'chilly', 'spooky', 'harried', 'unkempt', 'flamboyant', 'odd-looking',  'cagey', 'green', 'glum', 'good', 'just', 'last', 'precise', 'profane', 'queenly', 'jubilant', 'yellow', 'arresting', 'crochety', 'expectant', 'visionary', 'whimsical', 'real', 'zany', 'lost', 'beige', 'sepia', 'empty', 'second', 'toothless', 'cagey', 'cheap', 'chief', 'civil', 'clean', 'scarlet', 'glowing', 'tall', 'poor', 'empty', 'mellow', 'middle', 'golden', 'honest', 'larger', 'parched', 'massive', 'plastic'];

const singularNouns  = ['man', 'tree', 'building', 'box', 'bobcat', 'train', 'river', 'bridge', 'mountain', 'teacup', 'songbird', 'suitcase', 'carpet', 'map', 'bicycle', 'grass', 'hummingbird', 'square', 'highway', 'book', 'postcard', 'letter', 'desk', 'pumpkin', 'star', 'castle', 'shore', 'sword', 'stagecoach', 'roadster', 'chapel', 'saint', 'shrine', 'storm', 'laundry', 'basket', 'garden', 'window', 'table', 'trail', 'key', 'ink', 'pencil', 'bell', 'wallet', 'picture', 'shell', 'stage', 'dream', 'bowl'];

const pluralNouns = [];

const singularVerbs = [];

const pluralVerbs = ['wants', 'looks at', 'uses', 'is', 'says', 'goes', 'gets', 'makes', 'knows', 'thinks', 'takes', 'sees', 'works', 'calls', 'tries', 'asks', 'needs', 'seems', 'helps', 'talks', 'turns', 'starts', 'shows', 'plays', 'moves', 'likes', 'lives', 'believes', 'happens', 'provides', 'includes', 'continues past', 'changes', 'watches', 'follows', 'stops', 'creates', 'allows', 'adds', 'opens', 'walks', 'offers', 'remembers', 'loves', 'considers', 'appears before', 'awaits', 'serves', 'expects', 'stays', 'reaches', 'remains near', 'suggests', 'raises', 'passes', 'requires', 'reports', 'decides for', 'pulls', 'paints'];


const listWords = arr => {
    console.log(arr.length);
    for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
    }
};
//listWords(pluralVerbs);

console.log(`The ${singularNouns[1]} ${pluralVerbs[1]} the ${singularNouns[2]}`);









