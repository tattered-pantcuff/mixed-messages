// create object with arrays and methods 

const words = {
    adj: ['avid', 'dull', 'chilly', 'spooky', 'harried', 'unkempt', 'flamboyant', 'odd-looking',  'cagey', 'green', 'glum', 'good', 'just', 'last', 'precise', 'profane', 'queenly', 'jubilant', 'yellow', 'arresting', 'crochety', 'expectant', 'visionary', 'whimsical', 'real', 'zany', 'lost', 'beige', 'sepia', 'empty', 'second', 'toothless', 'cagey', 'cheap', 'chief', 'civil', 'clean', 'scarlet', 'glowing', 'tall', 'poor', 'empty', 'mellow', 'middle', 'golden', 'honest', 'larger', 'parched', 'massive', 'plastic'],
    noun: ['man', 'tree', 'building', 'box', 'bobcat', 'train', 'river', 'bridge', 'mountain', 'teacup', 'songbird', 'suitcase', 'carpet', 'map', 'bicycle', 'grass', 'hummingbird', 'square', 'highway', 'book', 'postcard', 'letter', 'desk', 'pumpkin', 'star', 'castle', 'shore', 'sword', 'stagecoach', 'roadster', 'chapel', 'saint', 'shrine', 'storm', 'laundry', 'basket', 'garden', 'window', 'table', 'trail', 'key', 'ink', 'pencil', 'bell', 'wallet', 'picture', 'shell', 'stage', 'dream', 'bowl'],
    verb: ['wants', 'looks at', 'uses', 'is', 'says', 'goes to', 'gets', 'makes', 'knows', 'thinks about', 'takes', 'sees', 'works', 'calls', 'tries', 'asks', 'needs', 'seems like', 'helps', 'talks', 'turns', 'starts', 'shows', 'plays', 'moves', 'likes', 'lives', 'believes', 'happens', 'provides', 'includes', 'continues past', 'changes', 'watches', 'follows', 'stops', 'creates', 'allows', 'adds', 'opens', 'walks', 'offers', 'remembers', 'loves', 'considers', 'appears before', 'awaits', 'serves', 'expects', 'stays with', 'reaches', 'remains near', 'suggests', 'raises', 'passes', 'requires', 'reports', 'decides for', 'pulls', 'paints'],
    conjunction: ['and', 'but', 'or', 'so', 'yet', 'because', 'if', 'when', 'since', 'while'],
    returnRandomAdj() {
        let num = Math.floor(Math.random() * this.adj.length);
        return this.adj[num];
    },
    returnRandomNoun() {
        let num = Math.floor(Math.random() * this.noun.length);
        return this.noun[num];
    },
    returnRandomVerb() {
        let num = Math.floor(Math.random() * this.verb.length);
        return this.verb[num];
    },
    returnRandomConjunction() {
        let num = Math.floor(Math.random() * this.conjunction.length);
        return this.conjunction[num];
    },
    poeticMessages() {
        return `The ${this.returnRandomAdj()} ${this.returnRandomNoun()} ${this.returnRandomVerb()}, ${this.returnRandomConjunction()} the ${this.returnRandomAdj()} ${this.returnRandomNoun()} ${this.returnRandomVerb()} the ${this.returnRandomNoun()}.`
    }
};

console.log(words.poeticMessages());

// add function to create array of strings when given specific number of phrases to create
const collectWords = num => {
    let wordsArray = [];
    let i = 1;
    do {
        wordsArray.push(words.poeticMessages());
        i = i + 1;
      } while (i <= num);
    return wordsArray;
  };

console.log(collectWords(3));
