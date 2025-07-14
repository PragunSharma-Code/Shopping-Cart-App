import { useEffect, useState } from "react";
import Product from '../components/Product'
import Spinner from "../components/Spinner";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);


    } catch (error) {
      console.log('Error: ' + error);
      setPosts([])
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();

  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      console.log(posts);
    }
  }, [posts])

  return (
    <div>

      {(loading) ? (<Spinner />) :
        (
          (posts.length > 0) ?
            (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl p-2 mx-auto space-y-10 space-x-5 max-h-[80vh]">
              {posts.map((item) => (<Product key={item.id} {...item} />))}
            </div>) :

            (<div className="flex justify-center items-center">No data found</div>)
        )}

    </div>
  );
};

export default Home;

