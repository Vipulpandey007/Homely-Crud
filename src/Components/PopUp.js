const PopUp = () => {
  return (
    <div className="content-wrapper">
      <div className="m-5 mt-0">
        <form>
          <div className="form-group">
            <label>Country Name</label>
            <input type="text" name="state" />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default PopUp;
