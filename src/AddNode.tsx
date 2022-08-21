import React, { useState } from 'react';
// @ts-ignore
import { Node } from './Types.tsx';
import { Box, Button, TextField } from '@mui/material';

type Props = {
    nodes: Array<Node>,
    setNodes: (links: Array<Node>) => void;
}

export default (props: Props) => {
    const { nodes, setNodes } = props;
    const [label, setLabel] = useState('');
    const handleSubmit = () => {
        const newNodes = nodes.concat(new Node(label));
        setNodes(newNodes);
        localStorage.setItem('nodes', JSON.stringify(newNodes))
        setLabel('');
    }
    return (
        <Box>
            <TextField 
                onChange={event => setLabel(event.target.value)} 
                id='add-node-label' 
                label='Label' 
                variant='outlined' 
                value={label}
            />
            <Button onClick={handleSubmit} variant="contained" disableElevation>Add Node</Button>
        </Box>
    )
}