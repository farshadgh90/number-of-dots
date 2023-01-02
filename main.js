document.querySelector(".btn").addEventListener("click", () => {
  let count = 0
  const str = document.querySelector('.input').value
  let list = str.split(' ')
  for(let j = 0 ; j < list.length ; j++){
    let word = list[j]
    for(let i = 0 ; i < word.length ; i++){
      if ( word[i] === 'ی' && word.length != (i+1) )
        count += 2;
      else
        if (obj[word[i]])
          count += parseInt(obj[word[i]])
    }
  }

  document.querySelector('.result').innerHTML = count
});