import React, { useEffect, useState } from "react";

//  const datas =[ 'A', 'B', 'C'];

function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}


function ArrList({datas}) {
  const [list, setList] = useState(datas);
  useEffect(() => {
    const mountArray = shuffle(datas);
    setList(mountArray);
  }, []);

  function handleShuffle() {
    const changes = shuffle([...list]);
    setList(changes);
    console.log("Shuffle", datas);
  }
  
  return (
    <div>
      {list.map((x, i) => (
        <div key={i}>
          <p onClick={handleShuffle}> {i+1} {x} </p>
        </div>
      ))}
    </div>
  );
}

function App (){
    return (
        <div>
          <ArrList datas={["A", "B", "C", "D", "E"]} />
        </div>
      );
}

export default App;
