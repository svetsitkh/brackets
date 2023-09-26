module.exports = function check(str, bracketsConfig) {
  let sequence = str;
  const result = myCheck(sequence, bracketsConfig);

  return result;
}

function myCheck(st, brConf) {
  let noMatch = false;
  let seq = st;

  brConf.forEach(element => {
    const re = `${element[0]}${element[1]}`;
    seq = CutOutBrackets(seq, re);
  });

  if (st.length == seq.length) {
    return seq.length == 0;
  } else {
    return myCheck(seq, brConf);
  }

}

function CutOutBrackets(seqn, r) {
  const prevSeqn = seqn;
  let s = seqn.replaceAll(r, '');

  if (s.length == prevSeqn.length) {
    return s;
  } else {
    return CutOutBrackets(s, r);
  }
}