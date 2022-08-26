import { useEffect, useState } from "react";
import ListItem from "../Products/ListItems/ListItems"
import axios from "axios"
import Loader from "../UI/Loader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Layout/navbar"
import Header from "../Layout/header"

const Products = () => {

    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);

    const params = useParams()
    const navigate = useNavigate()
    const { search } = useLocation()

    const queryParams = new URLSearchParams(search).get("search")


    useEffect(() => {
        async function fetchItems() {
            try {
                let slug = `items.json`
                if (params.category) {
                    slug = `items-${params.category}.json`
                }
                if (queryParams) {
                    slug += `?search=${queryParams}`
                }


                const response = await axios.get(`
                https://data-47acf-default-rtdb.firebaseio.com/${slug}`)
                const data = response.data

                if (!data) {
                    handleNotFound();
                    return;
                }
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                //setLoader(false)
                setItems(transformedData)
            }
            catch (error) {
                // setLoader(false)
                console.log(error)
                alert("Some Error")
            }
            finally {
                setLoader(false)
            }

        }
        fetchItems();

        return () => {
            setItems([])
            setLoader(true)
        }
    }, [params.category, queryParams])

    const handleNotFound = () => {
        navigate("/404")
    }


    // const updateItemTitle = async(itemId) => {
    //     await axios.patch(`https://react-data-example-default-rtdb.firebaseio.com/items/${itemId}.json`,{
    //         title : "Some Updated Title"
    //     })
    //     let data = [...items]
    //     let index = data.findIndex(e=>e.id === itemId)
    //     console.log(`Item with ID:  ${itemId}`)
    //     data[index]['title'] = "Some Updated Title"
    //     setItems(data)
    // }

    return (
        <>
            <Header />
            <Navbar />
            <div className={"product-list"}>
                <div className={"product-list--wrapper"}>
                    {
                        items.map(item => {
                            return (<ListItem key={item.id} data={item} /*updateItemTitle = {updateItemTitle}*/ ></ListItem>)
                        })
                    }
                </div>

            </div>
            {loader && <Loader />}
        </>
    );
}

export default Products