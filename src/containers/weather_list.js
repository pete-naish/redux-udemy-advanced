import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        let name = cityData.city.name;
        let temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
        let pressures = cityData.list.map(weather => weather.main.pressure);
        let humidities = cityData.list.map(weather => weather.main.humidity);
        // let lon = cityData.city.coord.lon;
        // let lat = cityData.city.coord.lat;
        // becomes
        let {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="°c" /></td>
                <td><Chart data={pressures} color="green" units=" hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>    
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°c)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table> 
        );
    }
}

function mapStateToProps({ weather }) { // shorthand for state.weather
    return { weather }; // same as { weather: weather}
}

export default connect(mapStateToProps)(WeatherList)