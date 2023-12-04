import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const StateCreate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    country_id: "",
    state_name: "",
    state_code: "",
  });
  const [state, setState] = useState([]);

  useEffect(() => {
    if (id === "new") return;

    fetchpost();
  }, []);

  useEffect(() => {
    fetchstate();
  }, []);
  const fetchstate = async () => {
    const data = await fetch("https://api.homelyhostel.com/api/country");
    const json = await data.json();
    setState(json);
  };
  const fetchpost = async () => {
    const data = await fetch("https://api.homelyhostel.com/api/state/" + id);
    const json = await data.json();
    setPost(json[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id === "new") {
        const data = axios.post("https://api.homelyhostel.com/api/state", post);
        console.log(data);
        toast.success((await data).data.message);
        return navigate("/state");
      } else {
        const data = axios.put(
          "https://api.homelyhostel.com/api/state/" + id,
          post
        );
        toast.success((await data).data.message);
        return navigate("/state");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    const postClone = { ...post };
    postClone[e.target.name] = e.target.value;
    //setPost(postClone);
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <div className="content-wrapper">
      <div className="m-5 mt-0">
        <form>
          <div className="form-group">
            <label>Country Name</label>
            <select name="country_id" onChange={handleChange}>
              <option>select county name</option>
              {state.map((states) => (
                <option key={states.id} name="country_id" value={states.id}>
                  {states.country_name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>State Name</label>
            <input
              type="text"
              name="state_name"
              placeholder="Enter State Name"
              value={post.state_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>State Code</label>
            <input
              type="text"
              name="state_code"
              placeholder="Enter State code"
              value={post.state_code}
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
export default StateCreate;
