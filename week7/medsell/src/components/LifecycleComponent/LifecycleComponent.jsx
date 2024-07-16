import React, { Component } from 'react';
class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component did update');
    }
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
        <div className='flex flex-col items-center'>
        <h1 className='font-sans text-lg pt-10'>Count: {this.state.count}</h1>
        <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4' onClick={this.incrementCount}>Increment</button>
    </div>
    
    );
  }
}
export default LifecycleComponent;