import React from 'react';



const WordRow = ({ word = "ANUJAGARW"}) => {

  let wordArr = word.split("").slice(0,5);

  return (

    wordArr.map((value) => {

      return (

          <span> {value}</span>
      );

    })
  );


}


export default WordRow;