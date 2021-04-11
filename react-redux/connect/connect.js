// this function takes in a React component as a parameter and returns an updated React component
// we pass both mapStateToProps and mapDispatchToProps

function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class extends React.Component {
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState(), ...this.props)}
            {...mapDispatchToProps(store.dispatch, ...this.props)}
          />
        );
      }

      componentDidMount() {
        this.unsubscribe = store.unsubscribe(this.handleChange.bind(this));
      }

      handleChange() {
        this.forceUpdate();
      }

      componentWillUnmount() {
        // add unsubscribe later
        this.unsubscribe();
      }
    };
  };
}



// use
const mapStateToProps = (state, props) => state;
const Container = connect(mapStateToProps, (dispatch) => ({
  onIncrement() {
    dispatch({ type: "INCREMENT" });
  },
}));
