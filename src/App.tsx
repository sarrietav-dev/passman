import React from 'react';
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <header>
        <div className="account-logo">A</div>
        <h1 className="account-name">Account Name</h1>
      </header>
      <form action="" className="form">
        <div className="form__field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id=""
            autoComplete="false"
            required
            placeholder="Name"
          />
        </div>

        <div className="form__field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            className="form__field"
            autoComplete="false"
            required
            placeholder="Password"
          />
          <button className="btn">Generate</button>
          <button className="btn">Copy</button>
        </div>

        <div className="form__field">
          <label htmlFor="site-url">Site URL</label>
          <input
            type="url"
            name="site-url"
            id=""
            autoComplete="false"
            required
            placeholder="Site URL"
          />
        </div>
        <div className="form__field">
          <label htmlFor="">Created at</label>
          <p className="creation-date">{Date().toString()}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
