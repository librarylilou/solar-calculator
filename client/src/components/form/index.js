import React from "react";

// This file exports the Input and TextArea, for user input.

export function Input(latitude) {
  return (
    <div className="form-group">
      <input className="form-control" {...latitude} />
    </div>
  );
}

export function TextArea(latitude) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...latitude} />
    </div>
  );
}

export function Input(longitude) {
  return (
    <div className="form-group">
      <input className="form-control" {...longitude} />
    </div>
  );
}

export function TextArea(longitude) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...longitude} />
    </div>
  );
}


export function Input(kwh) {
  return (
    <div className="form-group">
      <input className="form-control" {...kwh} />
    </div>
  );
}

export function TextArea(kwh) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...kwh} />
    </div>
  );
}



