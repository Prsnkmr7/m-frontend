import React from 'react'

class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        hasError: false
    };
  }

  static getDerivedStateFromError(error){
    return {
        hasError: true
    };
  }

  componentDidCatch() {

  }

  render(){
    if(this.state.hasError){
        return <div>Some Error has occured</div>
    }
    return this.props.children;
  }
}

export default SafeComponent