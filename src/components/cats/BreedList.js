import React from 'react';
import { connect } from 'react-redux';
import {
	Container,
	Typography,
	Paper,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TablePagination
} from '@material-ui/core';

import BreedDetails from './BreedDetails';
import { fetchBreeds } from '../../actions';

class BreedList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
			rowsPerPage: 5,
			showBreedDetails: false,
			currentBreed: {}
		};
	}

	componentDidMount() {
		this.props.fetchBreeds();
	}

	handleChangePage = (e, newPage) => {
		this.setState({ ...this.state, currentPage: newPage });
	};

	handleChangeRowsPerPage = e => {
		this.setState({
			...this.state,
			rowsPerPage: parseInt(e.target.value, 10),
			currentPage: 0
		});
	};

	handleClick = (e, breed) => {
		this.setState({ ...this.state, showDetails: true, currentBreed: breed });
	};

	renderBreeds() {
		const breeds = this.props.breeds.slice(
			this.state.currentPage * this.state.rowsPerPage,
			this.state.currentPage * this.state.rowsPerPage + this.state.rowsPerPage
		);
		return breeds.map((breed, index) => (
			<TableRow
				hover
				onClick={e => this.handleClick(e, breed)}
				key={breed.id}
				style={index % 2 ? { background: '#ddefc3' } : { background: 'white' }}>
				<TableCell>{breed.name}</TableCell>
				<TableCell>{breed.origin}</TableCell>
				<TableCell>{breed.life_span}</TableCell>
				<TableCell>{breed.weight.metric}</TableCell>
				<TableCell>{breed.description}</TableCell>
			</TableRow>
		));
	}

	render() {
		return (
			<React.Fragment>
				<Container
					maxWidth="sm"
					component="main"
					style={{ marginBottom: '30px' }}>
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom>
						Cat Breeds
					</Typography>
					<Typography
						variant="h6"
						align="center"
						color="textSecondary"
						component="p">
						Browse through our list of cat breeds and find the best cat for you.
					</Typography>
				</Container>
				<Container maxWidth="lg" component="main">
					<Paper>
						<TableContainer>
							<Table size="small" stickyHeader>
								<TableHead>
									<TableRow>
										<TableCell>Name</TableCell>
										<TableCell>Origin</TableCell>
										<TableCell>Average Life Span</TableCell>
										<TableCell>Weight (kg)</TableCell>
										<TableCell align="center">Description</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>{this.renderBreeds()}</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							rowsPerPageOptions={[5, 10, 25]}
							component="div"
							count={this.props.breeds.length}
							rowsPerPage={this.state.rowsPerPage}
							page={this.state.currentPage}
							onChangePage={this.handleChangePage}
							onChangeRowsPerPage={this.handleChangeRowsPerPage}
						/>
					</Paper>
					<Paper>
						{this.state.showBreedDetails && (
							<BreedDetails breed={this.state.currentBreed} />
						)}
					</Paper>
				</Container>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		breeds: Object.values(state.breeds)
	};
};

export default connect(mapStateToProps, { fetchBreeds })(BreedList);
