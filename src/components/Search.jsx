import React, { useState } from 'react';

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, type);
        }
    };

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    };

    return (
        <div className='row'>
            <div className='col s12'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='search'
                        type='search'
                        value={search}
                        onKeyDown={handleKey}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() => searchMovies(search, type)}
                    >
                        Search
                    </button>
                    <div>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='all'
                                onChange={handleFilter}
                                checked={type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='movie'
                                onChange={handleFilter}
                                checked={type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='series'
                                onChange={handleFilter}
                                checked={type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Search };
