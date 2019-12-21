import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	Container,
	Grid,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Pagination from './Pagination';

import { fetchBreeds } from '../../actions';

class BreedsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			elementsPerPage: 8
		};
	}

	componentDidMount() {
		this.props.fetchBreeds();
	}

	preventDefault = e => {
		e.preventDefault();
	};

	paginate = pageNumber => this.setState({ currentPage: pageNumber });

	currentList() {
		const indexOfLastElement =
			this.state.currentPage * this.state.elementsPerPage;
		const indexOfFirstElement = indexOfLastElement - this.state.elementsPerPage;
		return this.props.breeds.slice(indexOfFirstElement, indexOfLastElement);
	}

	renderBreeds() {
		const breeds = this.currentList();
		return breeds.map(breed => (
			<TableRow key={breed.id}>
				<TableCell>{breed.name}</TableCell>
				<TableCell>{breed.origin}</TableCell>
				<TableCell>{breed.life_span}</TableCell>
				<TableCell>{breed.weight.metric}</TableCell>
				<TableCell>{breed.description}</TableCell>
			</TableRow>
		));
	}

	render() {
		const classes = makeStyles(theme => ({
			container: {
				paddingTop: theme.spacing(4),
				paddingBottom: theme.spacing(4)
			},
			paper: {
				padding: theme.spacing(2),
				display: 'flex',
				overflow: 'auto',
				flexDirection: 'column'
			}
		}));

		return (
			<Container maxWidth="xl" className={classes.container}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Table maxwidth="small" className={classes.table}>
							<TableHead>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>Origin</TableCell>
									<TableCell>Average Life Span</TableCell>
									<TableCell>Weight (kg)</TableCell>
									<TableCell align="center">Description</TableCell>
								</TableRow>
							</TableHead>
							<TableBody stripedRows>{this.renderBreeds()}</TableBody>
						</Table>
						<Pagination
							elementsPerPage={this.state.elementsPerPage}
							totalElements={this.props.breeds.length}
							paginate={this.paginate}
						/>
					</Paper>
				</Grid>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		breeds: Object.values(state.breeds)
	};
};

export default withRouter(
	connect(mapStateToProps, { fetchBreeds })(BreedsList)
);
