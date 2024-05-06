import React, { Component } from 'react'
import EtudiantListItem from './EtudiantListItem';
import EmptyEtudiantListItem from './EmptyEtudiantListItem';
import EtudiantListLoadingSkeleton from './EtudiantListLoadingSkeleton';

export class EtudiantList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            etudiantList: [],
            isLoading: true,
            elapsedTime: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.etudiantList !== state.etudiantList) {
            return ({
                etudiantList: props.etudiantList
            });
        }
        return null;
    }

    componentDidMount() {
        this.interval = setInterval(this.checkData, 100);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.etudiantList !== this.props.etudiantList) {
            this.setState({
                isLoading: true,
                elapsedTime: 0
            });
            clearInterval(this.interval);
            this.interval = setInterval(this.checkData, 100);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    checkData = () => {
        const { elapsedTime } = this.state;
        if (elapsedTime >= 50) {
            clearInterval(this.interval);
            this.setState({ isLoading: false });
        } else if (this.props.etudiantList && this.props.etudiantList.length > 0) {
            clearInterval(this.interval);
            this.setState({ isLoading: false });
        } else {
            this.setState(prevState => ({
                elapsedTime: prevState.elapsedTime + 1
            }));
        }
    }

    render() {
        const { etudiantList, isLoading } = this.state
        return (
            <React.Fragment>
                <div className='flex flex-col justify-center'>
                    {isLoading ? (
                        <EtudiantListLoadingSkeleton count={10} />
                    ) : etudiantList.length > 0 ? (
                        etudiantList.map((etudiant) => (
                            <EtudiantListItem etudiant={etudiant} key={etudiant.numMat} />
                        ))
                    ) : (
                        <EmptyEtudiantListItem />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default EtudiantList