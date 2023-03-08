import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
        <Paper elevation={3}
            component="form"
            onSubmit={handleSubmit}
            sx={{ padding: 1, borderRadius: 2, mr: { sm: 5 }, height: '30px', display: 'flex', }}>

            <input className="search-bar"
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value) } />

            <IconButton onClick={(() => { })}>
                <Search />
            </IconButton>
        </Paper>
    )
}



export default SearchBar

