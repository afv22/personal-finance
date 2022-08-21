import React, { useState, useEffect } from 'react';
// @ts-ignore
import SankeyPlot from './SankeyPlot.tsx';
// @ts-ignore
import AddLink from './AddLink.tsx';
// @ts-ignore
import AddNode from './AddNode.tsx';
// @ts-ignore
import { Link, Node } from './Types.tsx';
import { Box } from '@mui/material';

const App = () => {
  const [links, setLinks] = useState<Array<Link>>([]);
  const [nodes, setNodes] = useState<Array<Node>>([]);

  useEffect(() => {
    const storedNodes = localStorage.getItem('nodes');
    const storedLinks = localStorage.getItem('links');
    if (storedNodes != null) {
      setNodes(JSON.parse(storedNodes));
    }
    if (storedLinks != null) {
      setLinks(JSON.parse(storedLinks));
    }
  }, []);

  return (
    <Box>
      <SankeyPlot nodes={nodes} links={links} />
      <AddLink links={links} setLinks={setLinks} />
      <AddNode nodes={nodes} setNodes={setNodes} />
    </Box>
  )
}

export default App;
