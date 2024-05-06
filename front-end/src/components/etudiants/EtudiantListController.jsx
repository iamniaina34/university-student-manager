import { InputAdornment, TextField } from '@mui/material';
import React, { Component } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export class EtudiantListController extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchValue: ''
        }
    }

    handleSearchValueChange = (e) => {
        const searchValue = e.target.value;
        this.setState({ searchValue });
        this.props.onSearch(searchValue);
    }

    render() {
        return (
            <>
                <div className="flex justify-end gap-2 px-2">
                    <TextField
                        id='search-textfield'
                        variant='outlined'
                        size='small'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchRoundedIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={this.state.searchValue}
                        onChange={this.handleSearchValueChange}
                    />
                </div>
            </>
        )
    }
}

export default EtudiantListController;
