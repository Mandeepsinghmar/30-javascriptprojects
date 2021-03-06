"use strict";

const e = React.createElement;

function Toggle() {
  const [people, setPeople] = React.useState("mandeep");
  const [autoCounter, setAutoCounter] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  const [num, setNum] = React.useState(0);

  const incrementCallback = React.useCallback(() => {
    console.log("hello");
    setCounter(counter + 1);
  }, [counter]);
  const incrementCallback = () => {
    console.log("hello");
    setCounter(counter + 1);
  };

  React.useEffect(() => {
    setInterval(() => {
      setAutoCounter((c) => c + 1);
    }, 1000);
  }, []);
  React.useEffect(() => {
    for (let i = 0; i <= 10; i++) {
      setTimeout(() => {
        console.log(i);
      });
      setNum(i);
    }
  }, []);
  React.useEffect(() => {
    console.log("render start");
  }, []);

  function incrementCallback() {
    setPeople("sandeep");
  }

  React.useLayoutEffect(() => {
    for (let i = 10; i <= 20; i++) {
      setNumber(i);
      console.log(i);
    }
    function asyncFunction() {
      const data = fetch("https://picsum.photos/200/300");
      console.log(data);
      setData(data.url);
    }
    asyncFunction();
  }, []);

  console.log("render end");
  return (
    <div>
      {/* <h1>Auto counter: {autoCounter}</h1> */}
      {/* <h2>
        Manual counter: {counter}
        {data}
      </h2> */}
      <button onClick={incrementCallback}>Increment</button>
      <div>
        <h1>{people}</h1>
        <h1>start</h1>
        <h1>{number}</h1>
        <h1>{num}</h1>
        <h1>end</h1>
      </div>
    </div>
  );
}
// const Greeting = (props) => {
//   console.log("Greeting Comp render");
//   return <h1>Hi {props.name}!</h1>;
// };

// function Toggle() {
//   const [counter, setCounter] = React.useState(0);

//   // Update state variable `counter`
//   // every 2 seconds.
//   React.useEffect(() => {
//     setInterval(() => {
//       setCounter(counter + 1);
//     }, 1000);
//   }, []);

//   console.log("App render");
//   return <Greeting name="Ruben" />;
// }

// function Toggle() {
//   const [count, setCount] = React.useState(0);

//   const prevCountRef = React.useRef();
//   React.useEffect(() => {
//     prevCountRef.current = count;
//   });
//   const prevCount = prevCountRef.current;

//   return (
//     <h1>
//       Now: {count}, before: {prevCount}
//     </h1>
//   );
// }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0, value: "" };
//     this.input = React.createRef();

//     // this.increaseCounter = this.increaseCounter.bind(this);
//     this.decreaseCounter = this.decreaseCounter.bind(this);
//   }

//   // no need to bind this method to work with callback, bcz arrow functin bind the method automatically
//   handleClick = () => {
//     this.setState((state) => ({
//       count: state.count + 1,
//     }));
//   };
//   decreaseCounter() {
//     this.setState((state) => ({
//       count: state.count - 1,
//     }));
//   }

//   componentDidMount() {
//     console.log("hello");
//   }
//   co;
//   componentDidUpdate(prevState) {
//     if (this.state.count !== prevState.count) console.log("updated");
//   }
//   componentWillUnmount() {
//     console.log("bye");
//   }
//   handleSubmit = (event) => {
//     alert("Your favorite flavor is: " + this.state.value);
//     event.preventDefault();
//   };
//   handleChange = (e) => this.setState({ value: e.target.value });
//   handleSubmitUncontrolled = (e) => {
//     e.preventDefault();
//     let name =
//       this.input.current.value === ""
//         ? "you are nameless"
//         : this.input.current.value;
//     alert("submitted name " + name);
//     // this.input.current.focus();
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>+</button>
//         {this.state.count}

//         <button onClick={this.decreaseCounter}>-</button>
//         {/* this is a controlled component : where the form data is controlled by the react component  */}
//         <form onSubmit={this.handleSubmit}>
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//           <input type="submit" value="submit" />
//         </form>
//         {/* uncontrolled component : where the form data is controlled by dom itself  */}
//         <form onSubmit={this.handleSubmitUncontrolled}>
//           <input type="text" ref={this.input} />
//           <input type="submit" value="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// function Toggle() {
//   const [num, setNum] = React.useState(0);
//   const prevCountRef = React.useRef();
//   const [value, setValue] = React.useState(
//     "please select your favourite flavour"
//   );

//   React.useEffect(() => {
//     prevCountRef.current = num;
//   });
//   const prevCount = prevCountRef.current;
//   // console.log(num);
//   function handleClick() {
//     setNum(num + 1);
//   }
//   // componentDidMount  in useEffect
//   React.useEffect(() => {
//     console.log("hello");
//   }, []);

//   // componentDidUpdate
//   React.useEffect(() => {
//     console.log("updated");
//   }, [num]);

//   // componentWillUnmount
//   React.useEffect(() => {
//     return () => {
//       console.log("bye");
//     };
//   }, []);
//   const handleSubmit = (e) => {
//     alert("your favourite flavor is: " + value);
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <h1>hii</h1>
//       <button onClick={handleClick}>count</button>
//       <h3>
//         {num} {prevCount}
//       </h3>
//       <form onSubmit={handleSubmit}>
//         <select value={value} onChange={(e) => setValue(e.target.value)}>
//           <option value="grapefruit">Grapefruit</option>
//           <option value="lime">Lime</option>
//           <option value="coconut">Coconut</option>
//           <option value="mango">Mango</option>
//         </select>
//         <input type="submit" value="submit" />
//       </form>
//     </div>

//     // e("h3", {}, "hello world")
//   );
// }

const domContainer = document.querySelector("#root");
ReactDOM.render(<Toggle />, domContainer);
