import React from 'react';


export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);



    }




    render() {
        const { searchHistory } = this.props;
        console.log(searchHistory)

        return (
            <div className="col-sm">
                <div className="card border border-info">
                    <div className="card-header alert-primary">
                        Search History
  </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <tbody>
                                {
                                    searchHistory.map(historyItem => {
                                        return(
                                        <tr>
                                            <td>{historyItem.city}</td>
                                            <td>{historyItem.date}<br/>{historyItem.time}</td>

                                        </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        );
    }
}