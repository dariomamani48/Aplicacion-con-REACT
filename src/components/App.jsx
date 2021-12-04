import '../assets/css/app.css'
import Sidebar from './Sidebar';
import Footer from './Footer';
import Navbar from './Navbar';
import Row from './Row';
import Lastmovie from './Lastmovie';
import Genres from './Genres';


function App() {
    return (
        <div id="wrapper">
            <Sidebar/>
		

		<div id="content-wrapper" className="d-flex flex-column">

			<div id="content">

				<Navbar/>

				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					<Row/>
					
	
					<div className="row">
						<Lastmovie/>

						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								<Genres/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer/>

		</div>

	</div>
    );
  }
  
  export default App;
  