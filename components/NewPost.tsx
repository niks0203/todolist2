import { useState } from "react";

export function NewPost({ addPost }) {
  const [enteredBody, setEnteredBody] = useState();

  function handleEntryChange(event) {
    setEnteredBody(event.target.value);
  }
  function handleformSubmit(event) {
    let form = event.target;
    event.preventDefault();

    let postData = {
      id: Math.random().toString(),
      body: enteredBody,
      status: "active",
    };
    addPost(postData);
    form.reset();
  }

  return (
    <form onSubmit={handleformSubmit} method="post" className="mb-3 p-2">
      <p>
        <input
          type="text"
          id="name"
          required
          placeholder="Add new todo entry"
          onChange={handleEntryChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </p>
    </form>
  );
}
