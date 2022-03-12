
class ProductList extends React.Component {
  render() {
    // leanpub-start-insert
    const product = Seed.products[0];
    // leanpub-end-insert
    return (
      <div className='ui unstackable items'>
        {/* leanpub-start-insert */}
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
        />
        {/* leanpub-end-insert */}
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          {/* leanpub-start-insert */}
          <img src={this.props.productImageUrl} />
          {/* leanpub-end-insert */}
        </div>
        <div className='middle aligned content'>
          {/* leanpub-start-insert */}
          <div className='header'>
            <a>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          {/* leanpub-end-insert */}
          <div className='description'>
            {/* leanpub-start-insert */}
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
            {/* leanpub-end-insert */}
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              leanpub-start-insert
              src={this.props.submitterAvatarUrl}
              leanpub-end-insert
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
