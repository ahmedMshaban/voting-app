class ProductList extends React.Component {
  state = { products: [] };

  componentDidMount() {
    this.setState({ products: Seed.products });
  }

  handleUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });

    this.setState({ products: nextProducts });
  };

  render() {
    //Sort by # of votes
    const sortedProducts = this.state.products.sort((a, b) => {
      return b.votes - a.votes;
    });

    const productComponents = sortedProducts.map((product) => {
      return (
        <Product
          key={`product- ${product.id}`}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={this.handleUpVote}
        />
      );
    });
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

class Product extends React.Component {
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  };

  render() {
    const {
      id,
      title,
      description,
      url,
      votes,
      submitterAvatarUrl,
      productImageUrl,
      onVote,
    } = this.props;

    return (
      <div className="item">
        <div className="image">
          <img src={productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon" />
            </a>
            {votes}
          </div>

          <div className="description">
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src={submitterAvatarUrl} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("content"));
