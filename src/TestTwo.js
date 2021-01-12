import React from 'react';



export default function TestTwo() {


const data = [
    {
      "id": 7,
      "name": "Eon Group ",
      "tree": [
        {
          "id": 28,
          "name": "Marketing ",
          "parent": null
        },
        {
          "id": 29,
          "name": "Human resource",
          "parent": null
        },
        {
          "id": 36,
          "name": "Finance",
          "parent": {
            "id": 28,
            "name": "Marketing ",
            "parent": null
          }
        },
        {
          "id": 37,
          "name": "Accounting",
          "parent": {
            "id": 28,
            "name": "Marketing ",
            "parent": null
          }
        }
      ]
    },
    {
      "id": 8,
      "name": "Eon Infosys",
      "tree": [
        {
          "id": 10,
          "name": "Software",
          "parent": null
        },
        {
          "id": 11,
          "name": "Developer",
          "parent": {
            "id": 10,
            "name": "Software",
            "parent": null
          }
        },
        {
          "id": 12,
          "name": "Testing",
          "parent": {
            "id": 10,
            "name": "Software",
            "parent": null
          }
        },
        {
          "id": 13,
          "name": "Requirements",
          "parent": {
            "id": 10,
            "name": "Software",
            "parent": null
          }
        }
      ]
    }
  ];

  console.log(data);
  return (
    <div>
      {
        data.map((rowdata,i)=>
        <div>
          <ul>
            <li>
          <div> {rowdata.name}</div>
          {
            (typeof(rowdata.tree)=='object')?
            <div>
              {
                rowdata.tree.map((subRowdata, k)=>
                <div>
                  {
                    (subRowdata.parent == null)? <div>{subRowdata.parent.id }</div>: null
                  }
                  <ul><li>
                  <div> {subRowdata.name}</div>
                  {/* <div> 2nd {subRowdata.parent}</div> */}
                  {
                    (subRowdata.parent == 'object')?
                    <div>
                      <div> 2nd {subRowdata.parent}</div>
                      {
                      subRowdata.parent.map(subsubRowdata=>
                      <div>
                        <div> 3nd {subsubRowdata.name}</div>
                      </div>
                      )}
                      
                    </div>
                    :null
                  }
                  </li></ul>
                </div>
                )
              }
            </div>
            : null
          }


          
      </li></ul>
        </div>
        )
      }
    </div>
  );
}