import Contents from "./Contents-json";
import styled from "./App.module.css";
import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");;

  // const onChange = (e) => {
  //   setInput(e.target.value);
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setInput("");
  // }

  useEffect(() => {
    setList(Contents);
  }, []);
  // console.log(list);
  const mapToComponents = (datas) => {
    datas.sort();
    datas.map((data) => (
      data.tags.map((tag) => (
        tag = tag.toUpperCase()
      ))
    ))
    datas = datas.filter((data) => {
      if (input === "") {
        return data;
      }
      else if (data.tags.indexOf(input) > -1) {
        return true;
      }
      return null;
    });
    return datas.map((data, index) => (
      <div key={index} className={styled.ContentsDiv}>
        <img src={data.Imgurl} alt={`${data.title} 이미지`} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <ul>
          {data.tags.map((tag, index) => (
            <li key={index}>#{tag}</li>
          ))}
        </ul>
      </div>
    ))
  }
  const onClick = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
    console.log(input);
  }
  return (
    <>
      {/* <input onChange={onChange} value={input} className={styled.input} /> */}
      {/* <button onClick={onClick} value="TS">#TS</button> */}
      {list.map((data) => (
        data.tags.map((tag) => (
          <button onClick={onClick} value={tag}>#{tag}</button>
        ))
      ))}
      <div className={styled.Div}>
        {mapToComponents(list)}
      </div>
    </>
  );
}

export default App;