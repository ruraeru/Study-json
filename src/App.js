import Contents from "./Contents-json";
import styled from "./App.module.css";
import { useEffect, useState } from "react";

const App = () => {
  // const [list, setList] = useState([]);
  const [input, setInput] = useState("");;

  const Visable = (input) => {
    Contents.map((item, index) => (
      item.tags.map((tag) => (
        input.toUpperCase() === tag.toUpperCase()
          ? Contents[index].select = true
          : Contents.map((item2, index) => (
            item === item2 ? null : Contents[index].select = false
          ))
      ))
    ))
  }

  const onChange = (e) => {
    setInput(e.target.value);
    Visable(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setInput("");
  }

  useEffect(() => {
    // setList(Contents);
  }, []);
  // console.log(list);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={input} className={styled.input} />
        <button>Click</button>
        <div className={styled.Div}>
          {Contents.map((data, index) => (
            <div key={index} className={styled.ContentsDiv} id={data.select ? null : "hide"}>
              <img src={data.Imgurl} alt={`${data.title} 이미지`} />
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <ul>
                {data.tags.map((tag, index) => (
                  <li key={index}>#{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </form>
    </>
  );
}

export default App;