import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const CountryCreate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    country_name: "",
    country_code: "",
  });
  useEffect(() => {
    if (id === "new") return;

    fetchpost();
  }, []);

  const fetchpost = async () => {
    const data = await fetch("https://api.homelyhostel.com/api/country/" + id);
    const json = await data.json();
    setPost(json[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id === "new") {
        const data = axios.post(
          "https://api.homelyhostel.com/api/country",
          post
        );
        toast.success((await data).data.message);
        return navigate("/country");
      } else {
        const data = axios.put(
          "https://api.homelyhostel.com/api/country/" + id,
          post
        );
        toast.success((await data).data.message);
        return navigate("/country");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const postClone = { ...post };
    postClone[e.target.name] = e.target.value;
    setPost(postClone);
  };
  return (
    <div className="content-wrapper">
      <div className="m-5 mt-0">
        <form>
          <div className="form-group">
            <label>Country Name</label>
            <input
              type="text"
              name="country_name"
              placeholder="Enter Country Name"
              value={post.country_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Country Code</label>
            <input
              type="text"
              name="country_code"
              placeholder="Enter Country code"
              value={post.country_code}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            {id === "new" ? "Submit" : "update"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default CountryCreate;
