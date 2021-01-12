import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import React from 'react';

const datanne = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};



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



const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function demo2() {
  const classes = useStyles();

  const renderTree = (nodes) => (
    <TreeItem key={nodes.data.id} nodeId={nodes.data.id} label={nodes.name}>
      {Array.isArray(nodes.parent) ? nodes.parent.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
}