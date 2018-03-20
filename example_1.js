class ProductRow extends React.Component {
    render() {
        console.log(this.props);
        const {product} = this.props;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}> {product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        const {category} = this.props;

        return (
            <tr>
                <th colSpan="2">{category}</th>
            </tr>
        )
    }
}


class ProductTable extends React.Component {
    render() {
        const {listProduct} = this.props;
        const row = [];
        let lastCategory = null;
        const {search} = this.props;
        const {checkbox} = this.props;

        listProduct.forEach((product, index) => {
            if (product.name.indexOf(search) <= -1) {
                return;
            }
            if (checkbox && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                row.push(
                    <ProductCategoryRow category={product.category} key={product.name}/>
                )
            }
            row.push(
                <ProductRow product={product} key={index}/>
            )

            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {row}
                </tbody>
            </table>
        )
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleInputChange(e) {
        this.props.onHandleInputChange(e.target.value);
    }

    handleCheckboxChange(e) {
        this.props.onHandleCheckboxChange(e.target.checked);
    }

    render() {
        const {search} = this.props;
        const {checkbox} = this.props;
        return (
            <div>
                <input type="text" value={search} onChange={this.handleInputChange}/>
                <p>
                    <input type="checkbox" checked={checkbox} onChange={this.handleCheckboxChange}/>
                    &nbsp;Only show products in stock
                </p>
            </div>
        )
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            checkbox: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleInputChange(search){
        this.setState({
            search: search
        });
    }

    handleCheckboxChange(checkbox){
        this.setState({
            checkbox: checkbox
        });
    }

    render() {
        const {listProduct} = this.props;
        return (
            <div className="Filterable-table">
                <SearchBar
                    search={this.state.search}
                    checkbox={this.state.checkbox}
                    onHandleInputChange={this.handleInputChange}
                    onHandleCheckboxChange={this.handleCheckboxChange}/>
                <ProductTable search={this.state.search} checkbox={this.state.checkbox} listProduct={listProduct}/>
            </div>
        )
    }
}

const listProduct = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<FilterableProductTable listProduct={listProduct}/>, document.getElementById("example_1"));