const Contact = () => {
  return (
    <div>
      <div className="m-2 p-2 text-center text-xl">
        <h1 className="font-bold">Contact Page</h1>
      </div>

      <div className="text-center">
        <form>
          <input
            type="text"
            className="border border-black p-2 m-2 rounded-lg"
            placeholder="Name"
          />
          <input
            type="text"
            className="border border-black p-2 m-2 rounded-lg"
            placeholder="message"
          />
          <button className="border bg-black rounded-lg text-white m-2 p-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
