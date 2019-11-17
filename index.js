let _ = require("lodash");

const TRIPLES = {
  nga: "ᜅ",
  ngi: "ᜅᜒ",
  nge: "ᜅᜒ",
  ngo: "ᜅᜓ",
  ngu: "ᜅᜓ",
}

const DOUBLES = {
  ng: "ᜅ᜔",
  ka: "ᜃ",
  ke: "ᜃᜒ",
  ki: "ᜃᜒ",
  ko: "ᜃᜓᜓ",
  ku: "ᜃᜓᜓ",
  ga: "ᜄ",
  ge: "ᜄᜒ",
  gi: "ᜄᜒ",
  go: "ᜅᜓ",
  gu: "ᜅᜓ",
  ta: "ᜆ",
  te: "ᜆᜒ",
  ti: "ᜆᜒ",
  to: "ᜆᜓ",
  tu: "ᜆᜓ",
  da: "ᜇ",
  de: "ᜇᜒ",
  di: "ᜇᜒ",
  do: "ᜇᜓ",
  du: "ᜇᜓ",
  ra: "ᜇ",
  re: "ᜇᜒ",
  ri: "ᜇᜒ",
  ro: "ᜇᜓ",
  ru: "ᜇᜓ",
  na: "ᜈ",
  ne: "ᜈᜒ",
  ni: "ᜈᜒ",
  no: "ᜈᜓ",
  nu: "ᜈᜓ",
  pa: "ᜉ",
  pe: "ᜉᜒ",
  pi: "ᜉᜒ",
  po: "ᜉᜓ",
  pu: "ᜉᜓ",
  ba: "ᜊ",
  be: "ᜊᜒ",
  bi: "ᜊᜒ",
  bo: "ᜊᜓ",
  bu: "ᜊᜓ",
  ma: "ᜋ",
  me: "ᜋᜒ",
  mi: "ᜋᜒ",
  mo: "ᜋᜓ",
  mu: "ᜋᜓ",
  ya: "ᜌ",
  ye: "ᜌᜒ",
  yi: "ᜌᜒ",
  yo: "ᜌᜓ",
  yu: "ᜌᜓ",
  la: "ᜎ",
  le: "ᜎᜒ",
  li: "ᜎᜒ",
  lo: "ᜎᜓ",
  lu: "ᜎᜓ",
  wa: "ᜏ",
  we: "ᜏᜒ",
  wi: "ᜏᜒ",
  wo: "ᜏᜓ",
  wu: "ᜏᜓ",
  sa: "ᜐ",
  se: "ᜐᜒ",
  si: "ᜐᜒ",
  so: "ᜐᜓ",
  su: "ᜐᜓ",
  ha: "ᜑ",
  he: "ᜑᜒ",
  hi: "ᜑᜒ",
  ho: "ᜑᜓ",
  hu: "ᜑᜓ",
}

const SINGLES = {
  " ": " ",
  "a": "ᜀ",
  "i": "ᜁ",
  "e": "ᜁ",
  "u": "ᜂ",
  "o": "ᜂ",

  "k": "ᜃ᜔",
  "g": "ᜄ᜔",
  "t": "ᜆ᜔",
  "d": "ᜇ᜔",
  "r": "ᜇ᜔",
  "n": "ᜈ᜔",
  "p": "ᜉ᜔",
  "b": "ᜊ᜔",
  "m": "ᜋ᜔",
  "y": "ᜌ᜔",
  "l": "ᜎ᜔",
  "w": "ᜏ᜔",
  "s": "ᜐ᜔",
  "h": "ᜑ᜔"
}

const ALL_MAPPING = _.merge(TRIPLES, DOUBLES, SINGLES)

findMatch = (toTranslate) =>{
  matchedKey = _.findKey(ALL_MAPPING, (_baybayin, matcher) => {
    return toTranslate.match(`^${matcher}`)
  })

  if(matchedKey){
    return { matchedKey: matchedKey, matchedValue: ALL_MAPPING[matchedKey] }
  }else{
    throw `Unable to find match mapping for ${toTranslate}`
  }
}


module.exports = {
  transliterate (input) {
    toTranslate = input.toLowerCase().trim()
    translated  = ""

    while(toTranslate.length > 0){
      let {matchedKey, matchedValue} = findMatch(toTranslate)
      toTranslate  = toTranslate.replace(matchedKey, "")
      translated  += matchedValue
    }

    return translated
  }
}
