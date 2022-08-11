import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,

					DataisLoaded: true
				});

			})

	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div>;

		return (
			<div className="App">
				<h1> Hexadecimal Software Private Limited </h1>
				<div className="container">
					{/* <div className="row" style={{ backgroundColor: "red" }}> */}
						{
							items.map((item) => (
								<div className="row table" >
									<div className="col-md-1 " style={{border:"1px solid black"}}>
										ID: {item.id}
									</div>
									<div className="col-md-2" style={{border:"1px solid black"}}>
										Name: {item.name}
									</div>
									<div className="col-md-2" style={{border:"1px solid black"}}>
										UserName: {item.username}
									</div>
									<div className="col-md-2" style={{border:"1px solid black"}}>
										Email: {item.email}
									</div>
									<div className="col-md-3" style={{border:"1px solid black"}}>
										Address: {item.address.street + ", " + item.address.suite + ", " + item.address.city}
									</div>
									<div className="col-md-2" style={{border:"1px solid black"}}>
										Website: {item.website}
									</div>

								</div>
							))
						}
					</div>

				{/* </div> */}
			</div>
		);
	}
}

export default App;
