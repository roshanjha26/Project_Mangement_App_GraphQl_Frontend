import React, { useState } from "react";

const EditProjectButton = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);

  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert("Please fill out all Fields");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}>
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          data-bs-dismiss="modal"
          className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProjectButton;