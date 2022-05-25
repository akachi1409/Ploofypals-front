import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from 'react-router-dom';
import { uploadTrait, cancelState } from "../../redux/state/stateActions";

import ImageBG from "../../assets/imageBG.svg";

import "./upload.css";
function Upload() {
  let navigate = useNavigate();
  const state = useSelector((state)=> state.state);
  const dispatch = useDispatch();

  const [files, setFiles] = useState(new FormData());
  const [images, setImages] = useState([]);
  const [rarity, setRarity] = useState([]);
  const [names, setNames] = useState([]);
  const [flag, setFlag] = useState(true);
  const [types, setTypes] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(()=>{
    if ( firstLoad){
      if ( state.state ==="")
        navigate("/")
      setFirstLoad(false);
    }
  })
  const notify = (msg) => {
    toast(msg);
  };
  const handleFile = (e) => {
    if (e.target.files.length==0)
    return;
    var file = e.target.files[0];
    console.log("file:" + e.target.files[0].name);
    var typesTemp = types;
    typesTemp.push("1");
    setTypes(typesTemp);
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function () {
      var temp = images;
      temp.push(reader.result);
      setImages[temp];
      var rarityTemp = [];
      for (var i = 0; i < temp.length; i++) {
        rarityTemp.push(Math.floor(100 / temp.length));
      }
      setRarity(rarityTemp);
    };
    var filesTemp = files;
    filesTemp.append(e.target.files[0].name, e.target.files[0]);
    var namesTemp = names;
    namesTemp.push(e.target.files[0].name);
    setNames(namesTemp);
    setFiles(filesTemp);
    // console.log(files.get("file"));
  };
  const handleUpload = async () => {
    var filesTemp = files;
    filesTemp.append("trait", state.state);
    filesTemp.append("names", names);
    filesTemp.append("rarity", rarity);
    filesTemp.append("types", types);
    setFiles(filesTemp);
    var sumRarity = 0;
    for (var i = 0; i < rarity.length; i++) {
      sumRarity += rarity[i];
    }
    console.log("sumRarity:", sumRarity);
    if (sumRarity !== 100) {
      notify("The sum of rarity should be 100");
      return;
    }
    try {
      const res = await axios.post("https://44.192.117.177:80/upload", files);
      if (res.status === 200 && res.data==="File uploaded!"){
        dispatch ( uploadTrait(state.state, state.uploaded));
        navigate("/")
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  const changeRarity = (e) => {
    var index = e.target.name.split("rarity-input-")[1];
    const rarityTemp = rarity;
    rarityTemp[index] = parseInt(e.target.value);
    console.log(rarityTemp);
    setRarity(rarityTemp);
    setFlag(!flag);
  };
  const handleType = (e) => {
    var index = e.target.name.split("type-select-")[1];
    const typesTemp = types;
    typesTemp[index] = e.target.value;
    setTypes(typesTemp);
    setFlag(!flag);
  };
  const onCancel = ()=>{
    dispatch(cancelState());
    navigate("/")
  }
  return (
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
          onClick = {() => onCancel()}
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
          <div className="font-medium leading-6" id="headlessui-dialog-title-6">
            <h2 className="text-4xl font-normal my-8 capitalize">
              <span>{state.state}</span>
            </h2>
          </div>
          <div>
            <div className="relative h-fit">
              <div className="mb-4">
                <label
                  className="block text-black font-bold mb-2 text-left text-sm"
                  htmlFor="input-layer-images"
                >
                  1. Add images
                  <span className="text-sm font-medium text-red"> *</span>
                </label>
                <div className="relative w-full h-48 bg-gray-dark p-2 mt-4">
                  <input
                    className="shadow appearance-none rounded w-full cursor-pointer absolute opacity-0 top-0 left-0 right-0 bottom-0 focus:outline-none focus:shadow-outline"
                    id="input-layer-images"
                    type="file"
                    multiple=""
                    accept="*"
                    placeholder=""
                    autoComplete="off"
                    name="input-layer-images"
                    onChange={(e) => handleFile(e)}
                  />
                  <div className="flex justify-center items-center flex-col h-full space-y-4 bg-black border-2 border-white border-dashed">
                    <button
                      id=""
                      className="!rounded-md !w-fit py-3 text-black bg-white text-base hover:bg-primary-light false false
                      font-medium rounded-full py-4 px-8 normal-case flex justify-center space-x-4 items-center"
                      type="button"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="22"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.5 1.1l3.4 3.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9 2v3h2.9L9 2zm4 14h-1v-3H9v-1h3V9h1v3h3v1h-3v3z"
                        ></path>
                      </svg>
                      <div>Add Files</div>
                    </button>
                    <p className="text-white text-sm">Or drop files here</p>
                  </div>
                </div>
              </div>
              {images.map((item, index) => (
                <div className="mb-4" key={index}>
                  <div className="flex justify-between items-center border rounded-md p-3 mb-2 border-gray-light">
                    <div className="flex justify-between items-center space-x-4">
                      <span className="preview-span">
                        <span className="preview-item">
                          <img
                            alt=""
                            className="image-item"
                            aria-hidden="true"
                            src={ImageBG}
                          />
                        </span>
                        <img
                          alt="Body (Common)"
                          src={item}
                          decoding="async"
                          data-nimg="intrinsic"
                          className="rounded-lg image-item1"
                        />
                      </span>
                      <div className="text-left">
                        <div className="mb-4 flex flex-row">
                          <label className="block text-black font-bold mb-2 text-left text-sm "></label>
                          <input
                            className="preview-input appearance-none border border-gray-light rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline text-sm -mb-4"
                            value={names[index]}
                            autoComplete="off"
                            disabled={true}
                          />
                          <input
                            className="preview-input appearance-none border border-gray-light rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline text-sm -mb-4"
                            // placeholder={rarity[index] + "%"}
                            name={"rarity-input-" + index}
                            value={rarity[index]}
                            autoComplete="off"
                            onChange={(event) => changeRarity(event)}
                          />
                          <select
                            className="preview-input appearance-none border border-gray-light rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline text-sm -mb-4"
                            value={types[index]}
                            name={"type-select-" + index}
                            onChange={(e) => handleType(e)}
                          >
                            <option value="1">Common</option>
                            <option value="2">Uncommon</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap items-center justify-between space-x-0 space-y-10 sm:space-x-5 sm:space-y-0 sm:flex-nowrap mt-3">
              <button
                id=""
                className="
                    undefined text-white bg-primary text-base
                    hover:bg-primary-light
                    false
                    false
                    w-full font-medium 
                    rounded-full py-4 px-8 normal-case
                    flex justify-center space-x-4 items-center  
                    "
                // type="submit"
                // form="add-layer"
                onClick={() => handleUpload()}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
export default Upload;
