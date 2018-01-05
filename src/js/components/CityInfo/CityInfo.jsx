import React from 'react';


export default class CityInfo extends React.Component {
    constructor(props) {
        super(props);


    }




    render() {
        const { cityData } = this.props;
        if (cityData === "") {
            return (
                <div className="col-sm">
                    <div className="card border border-info">
                        <div className="card-header alert-primary">
                            City Information
                    </div>
                        <div className="card-body cityInfoCover">
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="col-sm">
                <div className="card border border-info">
                    <div className="card-header alert-primary">
                        City Information
                    </div>
                    <div className="card-body">

                        <div className="container">
                            <div className="weatherDisplay">
                                <img src={cityData.icon} height="60px" /><h2>{cityData.name}</h2>
                                <p>Lat/long: {cityData.lat}, {cityData.lon}</p>
                            </div>
                            <div className="row text-center border border-light border-left-0 border-right-0 border-bottom-0">
                                <div className="col-sm">
                                    <h6>Temperature(F)</h6>
                                    <p className="text-success">{cityData.temp}F</p>
                                </div>
                                <div className="col-sm">
                                    <h6>Pressure</h6>
                                    <p className="text-success">{cityData.pressure}</p>
                                </div>
                                <div className="col-sm">
                                    <h6>Humidity</h6>
                                    <p className="text-success">{cityData.humidity}%</p>
                                </div>
                            </div>

                            <div className="row text-center">
                                <div className="col-sm">
                                    <h6>Lowest Temp(F)</h6>
                                    <p className="text-success">{cityData.min}F</p>
                                </div>
                                <div className="col-sm">
                                    <h6>Highest Temp(F)</h6>
                                    <p className="text-success">{cityData.max}F</p>
                                </div>
                                <div className="col-sm">
                                    <h6>Wind Speed</h6>
                                    <p className="text-success">{cityData.wind}mph</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}