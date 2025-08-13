import React from "react";

class ParentClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    this.timer = setInterval(() => {
      console.log("Hello");
    }, 1000);
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
        <h3>From Parent Class component</h3>
      </div>
    );
  }

  async componentDidMount() {
    //called only once when the component is mounted/rendered

    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonData = await data.json();
    console.log(jsonData);
  }
  componentDidUpdate() {
    clearInterval(this.timer);
    //Called after each render
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    //Will be called right before the component is unmounted from the dom
  }
}

export default ParentClassComponent;
