
class ProductList extends React.Component {
  // leanpub-start-insert
  handleProductUpVote(productId) {
    console.log(productId + ' was upvoted.');
  }
  // leanpub-end-insert

  render() {
    const products = Seed.products.sort((a, b) => (
      b.votes - a.votes
    ));
    const productComponents = products.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        leanpub-start-insert
        onVote={this.handleProductUpVote}
        leanpub-end-insert
      />
    ));
    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    );
  }
}

class Product extends React.Component {
  // leanpub-start-insert
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }
  // leanpub-end-insert

  // Inside `Product`
  // leanpub-start-insert
  handleUpVote() {
    this.props.onVote(this.props.id);
  }
  // leanpub-end-insert

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        {/* Inside `render` for Product` */}
        <div className='middle aligned content'>
          <div className='header'>
            {/* leanpub-start-insert */}
            <a onClick={this.handleUpVote}>
            {/* leanpub-end-insert */}
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
