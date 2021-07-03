"use strict";

const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return "You liked this.";
//     }

//     return e(
//       "button",
//       { onClick: () => this.setState({ liked: true }) },
//       "Like"
//     );
//   }
// }

function LikeButton() {
  return (
    // (
    //   <div>
    //     <h1>hii</h1>
    //     <button>hello</button>
    //   </div>
    // ),
    e("h3", {}, "hello world")
  );
}

const domContainer = document.querySelector("#root");
ReactDOM.render(e(LikeButton), domContainer);
