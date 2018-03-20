class Square extends React.Component {
    render() {
        return (
            <div className="Square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </div>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div>{status}</div>
                <div className="Board">
                    <div className="Board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="Board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="Board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>

        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div>
                <Board/>
                <div className="Board-info">

                </div>
            </div>

        );
    }
}

ReactDOM.render(<Game/>, document.getElementById("game"));