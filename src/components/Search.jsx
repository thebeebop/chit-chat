function Search() {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find a user"></input>
      </div>
      <div className="user-chat">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="user-chat-info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
