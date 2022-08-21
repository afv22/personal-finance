import React, { useState } from 'react';
// @ts-ignore
import { Link } from './Types.tsx';
import { Box, Button, TextField } from '@mui/material';

type Props = {
    links: Array<Link>,
    setLinks: (links: Array<Link>) => void;
}

export default (props: Props) => {
    const { links, setLinks } = props;
    const [source, setSource] = useState('');
    const [target, setTarget] = useState('');
    const [value, setValue] = useState('');
    const handleSubmit = () => {
        const newLinks = links.concat(new Link(source, target, value));
        setLinks(newLinks);
        localStorage.setItem('links', JSON.stringify(newLinks));
        setSource('');
        setTarget('');
        setValue('');
    }
    return (
        <Box>
            <TextField 
                onChange={event => setSource(event.target.value)} 
                id='add-link-source' 
                label='Source' 
                variant='outlined' 
                value={source}
            />
            <TextField 
                onChange={event => setTarget(event.target.value)} 
                id='add-link-target' 
                label='Target' 
                variant='outlined' 
                value={target}
            />
            <TextField 
                onChange={event => setValue(event.target.value)}
                id='add-link-value' 
                label='Value' 
                variant='outlined'
                value={value}
            />
            <Button onClick={handleSubmit} variant="contained" disableElevation>Add Link</Button>
        </Box>
    )
}