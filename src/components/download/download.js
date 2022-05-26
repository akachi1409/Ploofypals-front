import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import "./download.css";

function Download() {
    let navigate = useNavigate();
  const [firstLoad, setFirstLoad] = useState(true);
  const [number, setNumber] = useState(0);
  const [images, setImages] = useState([]);
  const [flag, setFlag] = useState(true);
  useEffect(async () => {
    if (firstLoad) {
      const res = await axios.get("http://44.192.117.177:80/images");
      const length = res.data.split(":")[1];
      setNumber(length);
      var temp = [];
      const previewLength = length>3? 3: length;
      for (var i = 0; i < previewLength; i++) {
        temp.push("http://44.192.117.177:80/result/" + i + ".png");
      }
      setImages(temp);
      setFirstLoad(false);
      setFlag(!flag);
    }
  }, [firstLoad]);
  
  const onCancel = ()=>{
    navigate("/")
  }

  const downImage = () =>{
      saveAs("http://44.192.117.177/result/result.zip", "image.jpg")
  }
  return (
    <div>
      <header>Download</header>
      <div className="min-h-screen text-center relative">
        <div
          className="absolute w-full h-full bg-opacity-20 bg-black"
          aria-hidden="true"
        ></div>
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          ​
        </span>
        <div className="w-full h-screen overflow-y-auto false inline-block px-6 py-10 align-middle transition-all transform bg-white shadow-xl relatives">
          <svg
            height="30"
            viewBox="0 0 32 32"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 2"
            className="block sticky top-0 z-10 cursor-pointer"
            fill="#4F46E5"
            onClick={() => onCancel()}
          >
            <path
              d="M22.5 31a.5.5 0 0 1-.354-.146L7.293 16 22.146 1.146a.5.5 0 0 1 .707.707L8.707 16l14.147 14.146A.5.5 0 0 1 22.5 31z"
              data-name="4"
            ></path>
          </svg>
          <div
            className="
                  w-12/12 m-auto sm:w-full sm:max-w-screen-sm
                  false
                  false
                  h-fit
                  flex flex-col justify-start relative"
          >
            <div
              className="font-medium leading-6"
              id="headlessui-dialog-title-6"
            >
              <h2 className="text-4xl font-normal my-8 capitalize">
                <span>{"There are " + number + " generate arts."}</span>
              </h2>
            </div>
            <div style={{display: 'flex'}}>
            {images.map((item, index) => (
              <div
                style={{ outline: "none", width: "265px"}}
                key={index}
              >
                <div>
                  <div style={{ width: "100%", display: "inline-block" }}>
                    <div className="w-11/12 m-auto border border-gray-light rounded-xl">
                      <div className="block border-b border-gray-light rounded-xl relative">
                        <span className="download-span1">
                          <span className="download-span2">{index}</span>
                          <img
                            src={item}
                            decoding="async"
                            data-nimg="responsive"
                            className="rounded-xl preview-img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
            <div style={{marginTop:"3em"}}>
                <Button variant="primary" className="download-btn" onClick = {()=> downImage()}>Download</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
