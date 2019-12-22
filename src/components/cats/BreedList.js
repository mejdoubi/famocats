import React from 'react';
import { connect } from 'react-redux';
import {
	Container,
	Typography,
	Grid,
	Paper,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TablePagination,
	Tooltip,
	CircularProgress
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ReactCountryFlag from 'react-country-flag';

import BreedDetails from './BreedDetails';
import { fetchBreeds } from '../../actions';

const styles = theme => ({
	main: {
		flexGrow: 1
	},
	paper: {
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.secondary.light
		}
	}
});

class BreedList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
			rowsPerPage: 5,
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
		this.setState({
			...this.state,
			currentBreed: breed
		});
	};

	renderBreeds() {
		const { classes, breeds } = this.props;
		const slicedBreeds = breeds.slice(
			this.state.currentPage * this.state.rowsPerPage,
			this.state.currentPage * this.state.rowsPerPage + this.state.rowsPerPage
		);
		return slicedBreeds.map(breed => (
			<Tooltip title={breed.name}>
				<TableRow
					hover
					onClick={e => this.handleClick(e, breed)}
					key={breed.id}
					className={classes.row}>
					<TableCell>{breed.name}</TableCell>
					<TableCell>
						<ReactCountryFlag
							svg
							countryCode={breed.country_code}
							title={breed.country_code}
							aria-label={breed.origin}
						/>
						{breed.origin}
					</TableCell>
					<TableCell>{breed.temperament}</TableCell>
					<TableCell>{breed.life_span}</TableCell>
					<TableCell>{breed.weight.metric}</TableCell>
				</TableRow>
			</Tooltip>
		));
	}

	render() {
		const { classes, breeds } = this.props;
		const { currentPage, rowsPerPage, currentBreed } = this.state;

		if (breeds.length === 0) {
			return (
				<Grid container spacing={2} justify="center" alignItems="center">
					<CircularProgress color="secondary" />
				</Grid>
			);
		}

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
				<Container component="main" className={classes.main}>
					<Grid container spacing={2}>
						<Grid item xs md={8}>
							<Paper className={classes.paper}>
								<TableContainer>
									<Table size="small" stickyHeader>
										<TableHead>
											<TableRow>
												<TableCell>Name</TableCell>
												<TableCell>Origin</TableCell>
												<TableCell>Temperament</TableCell>
												<TableCell>Average Life Span</TableCell>
												<TableCell>Weight (kg)</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>{this.renderBreeds()}</TableBody>
									</Table>
								</TableContainer>
								<TablePagination
									rowsPerPageOptions={[5, 10, 15]}
									component="div"
									count={breeds.length}
									rowsPerPage={rowsPerPage}
									page={currentPage}
									onChangePage={this.handleChangePage}
									onChangeRowsPerPage={this.handleChangeRowsPerPage}
								/>
							</Paper>
						</Grid>
						<Grid item xs>
							<BreedDetails breed={currentBreed} />
						</Grid>
					</Grid>
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

export default withStyles(styles)(
	connect(mapStateToProps, { fetchBreeds })(BreedList)
);
