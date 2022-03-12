// leanpub-start-insert
class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        Hello, friend! I am a basic React component.
      </div>
    );
  }
}
// leanpub-end-insert

// leanpub-start-insert
ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
// leanpub-end-insert
