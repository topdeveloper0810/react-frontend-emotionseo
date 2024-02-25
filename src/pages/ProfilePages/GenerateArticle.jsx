import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const articleTrends = [
  "FELICIDAD",
  "URGENCIA",
  "INSPIRACIÓN",
  "TRANQUILIDAD",
  "SORPRESA",
  "CONFÍE EN",
  "CURIOSIDAD",
  "EMPATÍA",
  "ENTUSIASMO",
  "PROFESIONALIDAD/SERIEDAD",
];
const k = [];
const Profile = () => {
  const navigate = useNavigate();
  // const [font, setFont] = useState(12);
  const [isTrue, setTrue] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [key, setKey] = useState("");
  const [ar, setAr] = useState([]);
  // useEffect(() => setFont(), [font]);
  // const handleFont = (e) => {
  //   if (e.keyCode === 13) {
  //     setFont(e.target.value);
  //   }
  // };
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
  };
  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
  };
  const handleCheckboxChange3 = (event) => {
    setIsChecked3(event.target.checked);
  };
  const handleCheckboxChange4 = (event) => {
    setIsChecked4(event.target.checked);
  };
  const handleCheckboxChange5 = (event) => {
    setIsChecked5(event.target.checked);
  };
  const handleCheckboxChange6 = (event) => {
    setIsChecked6(event.target.checked);
  };
  const handleCheckboxChange7 = (event) => {
    setIsChecked7(event.target.checked);
  };
  const handleCheckboxChange8 = (event) => {
    setIsChecked8(event.target.checked);
  };
  const handleCheckboxChange9 = (event) => {
    setIsChecked9(event.target.checked);
  };
  const token = localStorage.getItem("access");
  // Set the Authorization header with the bearer token
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  // Set up Submit button event.
  const generate = (e) => {
    e.preventDefault();
    const data = {
      title: title,
    };
    const queryParams = new URLSearchParams(data).toString();
    axios
      .get(`http://138.201.123.93:8000/user/generating/?${queryParams}`, {
        headers,
      })
      .then((res) => {
        const k = res.data.keyword;
        console.log(k);
        const words = k.split(",");
        console.log(typeof words);
        // Create a new array using the resulting words
        const newArra = words.map((word) => word.trim());
        console.log(newArra);
        setAr(newArra);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkedValues = [];
    if (isChecked1) {
      checkedValues.push("URGENCY");
    }
    if (isChecked2) {
      checkedValues.push("INSPIRATION");
    }
    if (isChecked3) {
      checkedValues.push("TRANQUILITY");
    }
    if (isChecked4) {
      checkedValues.push("SURPRISE");
    }
    if (isChecked5) {
      checkedValues.push("TRUST");
    }
    if (isChecked6) {
      checkedValues.push("CURIOSITY");
    }
    if (isChecked7) {
      checkedValues.push("EMPATHY");
    }
    if (isChecked8) {
      checkedValues.push("ENTHUSIASM");
    }
    if (isChecked9) {
      checkedValues.push("PROFESSIONALISM/SERIOUSNESS");
    }
    if (isChecked) {
      checkedValues.push("HAPPINESS");
    }
    const data = {
      title: title,
      keyword: keyword,
      checkedValues: checkedValues,
    };
    console.log(data);
    const queryParams = new URLSearchParams(data).toString();
    axios
      .get(`http://138.201.123.93:8000/user/service/?${queryParams}`, {
        headers,
      })
      .then((res) => {
        if (res.status === 200) {
          // Retrieve the token from local storage
          alert("okay");
        } else {
          setTrue(true);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Check your information.");
      });
  };
  const startNow = (e) => {
    e.preventDefault();
    navigate("/precios");
  };
  const sett = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const setk = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  console.log(keyword);
  return (
    <div class="w-full xl:w-[65rem] rounded-[1.5rem] min-h-[40rem] bg-slate-950 shadow-xl shadow-fuchsia-700 border-2 border-purple-700 mt-16 lg:m-auto p-5 sm:p-10">
      <h5 class=" text-[2.3rem] font-bold tracking-tight text-white font-mono text-center">
        Genera un artículo ahora mismo
      </h5>
      <div className=" flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 min-h-[32rem] ">
          <div className="w-full p-4 flex flex-col hover:p-3 hover:m-1">
            <label htmlFor="titleEnter" className="text-white font-mono">
              Introduzca el título del artículo
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter article title"
              className="rounded-lg"
              onChange={sett}
            />
          </div>
          <div className="w-full p-4 flex flex-col">
            <label htmlFor="keyword" className="text-white font-mono">
              Introduzca una palabra clave específica
            </label>
            <input
              type="text"
              name="keyword"
              onChange={setk}
              placeholder="Enter specific keyword"
              className="rounded-lg"
              value={keyword}
            />
          </div>
          <div className=" flex flex-col-reverse lg:flex-row justify-between w-full p-4 gap-3 ">
            <button
              type="button"
              class="text-white center bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 h-11 text-center "
              onClick={generate}
            >
              Generate
            </button>
          </div>
          <div className="w-full p-4 flex flex-col">
            <label htmlFor="sampleTitle" className="text-white font-mono">
              {ar.map((item) => (
                <div
                  onClick={() => setKeyword((keyword) => keyword + "," + item)}
                >
                  {item}
                </div>
              ))}
            </label>
          </div>
          <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            <label className="text-white">
              <input
                type="checkbox"
                name="happy"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              HAPPINESS
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={isChecked1}
                onChange={handleCheckboxChange1}
              />
              URGENCY
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={isChecked2}
                onChange={handleCheckboxChange2}
              />
              INSPIRATION
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={isChecked3}
                onChange={handleCheckboxChange3}
              />
              TRANQUILITY
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={isChecked4}
                onChange={handleCheckboxChange4}
              />
              SURPRISE
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={isChecked5}
                onChange={handleCheckboxChange5}
              />
              TRUST
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={isChecked6}
                onChange={handleCheckboxChange6}
              />
              CURIOSITY
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={isChecked7}
                onChange={handleCheckboxChange7}
              />
              EMPATHY
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={isChecked8}
                onChange={handleCheckboxChange8}
              />
              ENTHUSIASM
            </label>
          </div>
          <div className="w-full px-4">
            <label className="text-white">
              <input
                type="checkbox"
                checked={isChecked9}
                onChange={handleCheckboxChange9}
              />
              PROFESSIONALISM/SERIOUSNESS
            </label>
          </div>
          <div className=" flex flex-col-reverse lg:flex-row justify-between w-full p-4 gap-3 ">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 h-11 text-center "
              onClick={handleSubmit}
            >
              Create Article
            </button>
            <button
              type="button"
              class={`text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 h-11 text-center ${
                isTrue ? "" : "hidden"
              }`}
              onClick={startNow}
            >
              ¡COMENZAR AHORA!
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 ">
          <label htmlFor="article" className="font-mono text-white">
            Sample Article
          </label>
          <textarea
            name="article"
            id="article"
            className="w-full rounded-lg scroll-smooth focus:scroll-auto min-h-[10rem] md:min-h-[32.3rem] lg:min-h-[28.7rem] xl:min-h-[27.2rem] h-[90%]"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default Profile;
