import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { Component } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EtudiantFilterDialog from './EtudiantFilterDialog';
export class EtudiantListController extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchValue: '',
            niveau: '',
            parcours: ''
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
                <div className="flex justify-end items-center gap-2 px-4 py-2 bg-zinc-50 rounded-xl border sticky z-10 top-0">
                    <TextField
                        id='search-textfield'
                        variant='outlined'
                        size='small'
                        placeholder='Rechercher...'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchRoundedIcon />
                                </InputAdornment>
                            ),
                            autoComplete: 'off',
                            style: {
                                borderRadius: '24px',
                                fontSize: '12px',
                            },
                        }}
                        value={this.state.searchValue}
                        onChange={this.handleSearchValueChange}
                    />
                    <EtudiantFilterDialog />
                </div>
            </>
        )
    }
}

export default EtudiantListController;
