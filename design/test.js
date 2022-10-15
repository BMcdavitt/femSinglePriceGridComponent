let i = 0

function solution(list) {
  let result = ''
  let n

  i = 0

  for (i; i < list.length; i++) {
    n = list[i]
    if (list[i + 1] === n + 1 && list[i + 2] === n + 2) {
      result += getSequence(list.slice(i)) + ','
    } else {
      result += n.toString() + ','
    }
  }

  return result.slice(0, -1)
}

function getSequence(list) {
  // list starts with at least 3 consecutive numbers

  let j = 0
  let sequence = list[j].toString()

  while (list[j + 1] === list[j] + 1) {
    j++
  }

  sequence = sequence + '-' + list[j].toString()
  i = i + j

  return sequence
}
