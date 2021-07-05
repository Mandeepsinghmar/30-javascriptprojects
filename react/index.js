"use strict";

const e = React.createElement;

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

function Toggle() {
  const [num, setNum] = React.useState(0);
  const prevCountRef = React.useRef();
  const [value, setValue] = React.useState(
    "please select your favourite flavour"
  );

  React.useEffect(() => {
    prevCountRef.current = num;
  });
  const prevCount = prevCountRef.current;
  // console.log(num);
  function handleClick() {
    setNum(num + 1);
  }
  // componentDidMount  in useEffect
  React.useEffect(() => {
    console.log("hello");
  }, []);

  // componentDidUpdate
  React.useEffect(() => {
    console.log("updated");
  }, [num]);

  // componentWillUnmount
  React.useEffect(() => {
    return () => {
      console.log("bye");
    };
  }, []);
  const handleSubmit = (e) => {
    alert("your favourite flavor is: " + value);
    e.preventDefault();
  };

  return (
    <div>
      <h1>hii</h1>
      <button onClick={handleClick}>count</button>
      <h3>
        {num} {prevCount}
      </h3>
      <form onSubmit={handleSubmit}>
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="submit" />
      </form>
    </div>

    // e("h3", {}, "hello world")
  );
}

const domContainer = document.querySelector("#root");
ReactDOM.render(<Toggle />, domContainer);
