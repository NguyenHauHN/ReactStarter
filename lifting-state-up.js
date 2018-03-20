function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenhiet'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const {temperature} = this.props;
        const {scale} = this.props;
        return (
            <fieldset>
                <legend>
                    Enter temperature in {scaleNames[scale]}:
                </legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />

            </fieldset>
        )
    }
}

class Caculator extends React.Component {

    constructor(props) {
        super(props);
        this.handleCeisiusChange = this.handleCeisiusChange.bind(this);
        this.handleFahrenhietChange = this.handleFahrenhietChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCeisiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature
        });
    }

    handleFahrenhietChange(temperature) {
        this.setState({
            scale: 'f',
            temperature
        });
    }

    render() {
        const {scale} = this.state;
        const {temperature} = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenhiet = scale === 'c' ? tryConvert(temperature, toFahrenhiet) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCeisiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenhiet}
                    onTemperatureChange={this.handleFahrenhietChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </div>
        )
    }
}

function toCelsius(fahrenhiet) {
    return (fahrenhiet - 32) * 5 / 9;
}

function toFahrenhiet(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

ReactDOM.render(<Caculator/>, document.getElementById("lifting-state-up"));