import { Header,Details} from '../components';
import { useSelector} from "react-redux";
import { Navigate  } from 'react-router-dom';


function DetailsPage({ isAuthenticated }) {
  const user = useSelector((state)=>state.user);
  // Check if the user is authenticated
  if (user && user.isAuthenticated){
    return (
      <div>
        <Header />
        <Details />
      </div>
    );
  }else{
// Redirect to the login page if the user is not authenticated
return <Navigate to="/login" />;
  
}
}
export default DetailsPage