import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getRequests, loadProductsRequest } from "../../../redux/productsRedux";
import Products from "../../features/Products/Products";
import { Alert, ProgressBar } from "react-bootstrap";
import { useEffect } from "react";



const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(loadProductsRequest())
    }, [dispatch])

    const products = useSelector(getAllProducts)
    const requests = useSelector(getRequests);

    if(requests['LOAD_PRODUCTS'] && requests['LOAD_PRODUCTS'].pending) return <ProgressBar now={60} />
    else if(requests['LOAD_PRODUCTS'] && requests['LOAD_PRODUCTS'].error) return <Alert color="warning">Coś poszło nie tak... Spróbuj później</Alert>
    else if((requests['LOAD_PRODUCTS'] && !requests['LOAD_PRODUCTS'].success) || !products.length) return <Alert color='info'>No Products!</Alert>
    else if(requests['LOAD_PRODUCTS'] && requests['LOAD_PRODUCTS'].success) return (
        <Products products={products} />
    )
 
};

export default Home;
