import Items from "../Items/Items";
import "./Search.css";
import { useState } from "react";
import { useStorage } from "../../App";
import { useRef } from "react";
function Search({ reload }) {
  const [searchData, setSearchData] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const nameElRef = useRef(null);
  const familyElRef = useRef(null);
  const meliCodeElRef = useRef(null);

  let allDataEL = document.querySelector(".all-data");
  let rmFiltesBtnEL = document.querySelector(".rm-filters-btn");
  function doSearch() {
    const all_data = useStorage();
    if (all_data) {
      if (searchData.name || searchData.family || searchData.maliCode) {
        if (searchData.name && searchData.family && searchData.meliCode) {
          const searchRes = all_data.filter((data) => {
            return (
              data.name.includes(searchData.name) &&
              data.family.includes(searchData.family) &&
              data.meliCode.includes(searchData.meliCode)
            );
          });
          setSearchResult(searchRes);
          console.log(searchRes);
        } else if (searchData.name && searchData.family) {
          const searchRes = all_data.filter((data) => {
            return (
              data.name.includes(searchData.name) &&
              data.family.includes(searchData.family)
            );
          });
          setSearchResult(searchRes);
        } else if (searchData.name && searchData.meliCode) {
          const searchRes = all_data.filter((data) => {
            return (
              data.name.includes(searchData.name) &&
              data.meliCode.includes(searchData.meliCode)
            );
          });
          setSearchResult(searchRes);
        } else if (searchData.meliCode && searchData.family) {
          const searchRes = all_data.filter((data) => {
            return (
              data.family.includes(searchData.family) &&
              data.meliCode.includes(searchData.meliCode)
            );
          });
          setSearchResult(searchRes);
        } else if (searchData.name) {
          const searchRes = all_data.filter((data) => {
            return data.name.includes(searchData.name);
          });
          setSearchResult(searchRes);
        } else if (searchData.family) {
          const searchRes = all_data.filter((data) => {
            return data.family.includes(searchData.family);
          });
          setSearchResult(searchRes);
        } else if (searchData.meliCode) {
          const searchRes = all_data.filter((data) => {
            return data.meliCode.includes(searchData.meliCode);
          });
          setSearchResult(searchRes);
        }
        allDataEL.classList.add("disable");
        rmFiltesBtnEL.classList.add("enable");
      }
    } else {
      alert("لطفا چند آیتم اضافه و سپس اقدام به جست و جو نمایید.");
    }

    // console.log(allDataEL);
  }
  function removeFilters() {
    allDataEL.classList.remove("disable");
    rmFiltesBtnEL.classList.remove("enable");
    setSearchResult(null);
    setSearchData(null);
    meliCodeElRef.current.value = "";
    nameElRef.current.value = "";
    familyElRef.current.value = "";
  }

  function handleInputs(e) {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="main">
        <div className="search-header">
          <h2>جستجو</h2>
          <button
            className="rm-filters-btn"
            type="button"
            onClick={() => {
              removeFilters();
            }}
          >
            حذف فیلتر
          </button>
        </div>
        <div className="search-box">
          <div className="input-box">
            <label htmlFor="name">نام</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => handleInputs(e)}
              ref={nameElRef}
            />
          </div>
          <div className="input-box">
            <label htmlFor="family">نام خانوادگی</label>
            <input
              type="text"
              name="family"
              id="family"
              onChange={(e) => handleInputs(e)}
              ref={familyElRef}
            />
          </div>
          <div className="input-box">
            <label htmlFor="meliCode">کدملی</label>
            <input
              type="text"
              name="meliCode"
              id="meliCode"
              onChange={(e) => handleInputs(e)}
              ref={meliCodeElRef}
            />
          </div>

          <button
            className="search-btn"
            type="button"
            onClick={() => {
              doSearch();
            }}
          >
            جستجو
          </button>
        </div>
        {searchResult ? (
          <div className="search-result">
            <Items data={searchResult} reload={reload} />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Search;
