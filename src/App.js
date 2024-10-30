import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// function App() {
//   const [counter, setValue] = React.useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log("일좀 그만시켜요");
//   const iRunOnlyOnce = () => {
//     console.log("일해야지");
//   };
//   useEffect(() => {
//     console.log("한번만 할꺼야");
//   }, []);
//   useEffect(() => {
//     if ((keyword != "") & (keyword.length > 5)) {
//       console.log("검색", keyword);
//     }
//   }, [keyword]);

//   useEffect(() => {
//     console.log("카운터 변함");
//   }, [counter]);

//   useEffect(() => {
//     console.log("카운터또는 검색 달라짐 확인바람");
//   }, [keyword, counter]);

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1 className={styles.title}>{counter}</h1>
//       <Button onClick={onClick} text={"들기름"}></Button>
//     </div>
//   );
// }

// function Hello() {
//   function destory() {
//     console.log("파괴");
//   }
//   function effectFn() {
//     console.log("created :)");
//     return destory;
//   }
//   useEffect(() => {
//     console.log("hi");
//     return destory;
//   }, []);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello></Hello> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

// function App() {
//   const [hehe, setHehe] = useState("");
//   const [list, setList] = useState([]);
//   const onChange = (e) => setHehe(e.target.value);
//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (hehe === "") {
//       return;
//     }
//     setList((currentArray) => [hehe, ...currentArray]);
//     setHehe("");
//   };
//   console.log(list);
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <div>
//           <h1>으아아아아아아 (너가 뻘짓한 횟수: {list.length})</h1>
//           <input
//             onChange={onChange}
//             value={hehe}
//             type="text"
//             placeholder="집가고싶어요"
//           ></input>
//           <br></br>
//           <button type="submit">흐아아아아</button>
//         </div>
//       </form>
//       <hr></hr>
//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((re) => re.json())
//       .then((data) => {
//         setCoins(data);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>이것이 보이는가 {loading ? "놉" : `(${coins.length})`}</h1>
//       {loading ? <strong>보임</strong> : <strong>안보임</strong>}
//       <ul>
//         {coins.map((e) => (
//           <li>
//             {e.name} ({e.symbol}): {e.quotes.USD.price} USD 인가
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const json = await (
//       await fetch(
//         `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
//       )
//     ).json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div>
//           {movies.map((movie) => (
//             <Movie
//               key={movie.id}
//               coverImg={movie.medium_cover_image}
//               title={movie.title}
//               summary={movie.summary}
//               genres={movie.genres}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

/**헤헤헤헤헤헤헿 여긴 누구 나는 어디 */
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello!!</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail></Detail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
