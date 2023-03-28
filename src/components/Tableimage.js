import React, { useState } from "react";

const TableImage = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  const handleBoxClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {image ? (
        <div style={{ position: "relative" }}>
          <img src={image} style={{ width: 50, height: 50 }} />
          <br></br>
          <div
            className="mr-5"
            style={{
              position: "absolute",
              bottom: -10,
              right: -10,
              cursor: "pointer",
            }}
            onClick={handleImageDelete}
          >
            Delete
          </div>
        </div>
      ) : (
        <div
          style={{
            width: 50,
            height: 50,
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={handleBoxClick}
        >
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <span>Upload</span>
        </div>
      )}
    </div>
  );
};

export default TableImage;
