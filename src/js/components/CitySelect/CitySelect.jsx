import React from 'react';
import {
    getWeather,
    updateSearchHistory
} from './citySelectActions';

export default class CitySelect extends React.Component {
    constructor(props) {
        super(props);


        this.handleCitySearch = this.handleCitySearch.bind(this);
        this.handlePreloadedCities = this.handlePreloadedCities.bind(this);

    }
    handleCitySearch() {


        var city = document.getElementById('citySearch').value;

        const { dispatch } = this.props;

        var mm = new Date().getMonth() + 1;
        var dd = new Date().getDate();
        var yyyy = new Date().getFullYear();
        var date = String(mm + '/' + dd + '/' + yyyy)

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        function standardTime(i) {
            if (i > 12) {
                i = i - 12;
            }
            return i;
        }

        var hr = addZero(standardTime(new Date().getHours()));
        var min = addZero(new Date().getMinutes());
        var sec = addZero(new Date().getSeconds());
        var time = String(hr + ':' + min + ':' + sec)

        dispatch(getWeather(city));
        dispatch(updateSearchHistory(city, date, time));
    }

    handlePreloadedCities(e) {


        var city = e.target.value;

        const { dispatch } = this.props;

        var mm = new Date().getMonth() + 1;
        var dd = new Date().getDate();
        var yyyy = new Date().getFullYear();
        var date = String(mm + '/' + dd + '/' + yyyy)

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        function standardTime(i) {
            if (i > 12) {
                i = i - 12;
            }
            return i;
        }

        var hr = addZero(standardTime(new Date().getHours()));
        var min = addZero(new Date().getMinutes());
        var sec = addZero(new Date().getSeconds());
        var time = String(hr + ':' + min + ':' + sec)

        dispatch(getWeather(city));
        dispatch(updateSearchHistory(city, date, time));
    }


    render() {
        const { cityData } = this.props;
        var error = cityData.error

        if (error == true){
        return (
            <div>
                <div className="citySelectorDiv">
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter a City or Click on one below..." aria-label="Search for..." name="citySearch" id="citySearch" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-success" type="button" onClick={this.handleCitySearch}>Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="preloadedCities mb-3">
                    <button type="button" className="btn btn-primary" value="San Diego" onClick={this.handlePreloadedCities}>San Diego</button>
                    <button type="button" className="btn btn-primary" value="New York" onClick={this.handlePreloadedCities}>New York</button>
                    <button type="button" className="btn btn-primary" value="Washington" onClick={this.handlePreloadedCities}>Washington D.C</button>
                    <button type="button" className="btn btn-primary" value="London" onClick={this.handlePreloadedCities}>London</button>
                    <button type="button" className="btn btn-primary" value="Tokyo" onClick={this.handlePreloadedCities}>Tokyo</button>
                </div>
                <div className="card error p-1">
                    <p className="errorP">An error occured while attempting to display your selected Cities Weather</p>
                    <p>Please check spelling of your city and try again</p>
                </div>
            </div>
        );
    }

        return (
            <div>
                <div className="citySelectorDiv">
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter a City or Click on one below..." aria-label="Search for..." name="citySearch" id="citySearch" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-success" type="button" onClick={this.handleCitySearch}>Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="preloadedCities mb-3">
                    <button type="button" className="btn btn-primary" value="San Diego" onClick={this.handlePreloadedCities}>San Diego</button>
                    <button type="button" className="btn btn-primary" value="New York" onClick={this.handlePreloadedCities}>New York</button>
                    <button type="button" className="btn btn-primary" value="Washington" onClick={this.handlePreloadedCities}>Washington D.C</button>
                    <button type="button" className="btn btn-primary" value="London" onClick={this.handlePreloadedCities}>London</button>
                    <button type="button" className="btn btn-primary" value="Tokyo" onClick={this.handlePreloadedCities}>Tokyo</button>
                </div>
            </div>
        );
    }
}