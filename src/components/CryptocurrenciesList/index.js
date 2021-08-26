// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptoCurrenciesList extends Component {
  renderCryptoCurrenciesView = () => {
    const {cryptoCurrencyDataList} = this.props
    return (
      <div className="crypto-currencies-list">
        <div className="list-header">
          <p className="list-coin-type-heading">Coin Type</p>
          <div className="usd-and-euro-values-container">
            <p className="list-coin-value-heading">USD</p>
            <p className="list-coin-value-heading">EURO</p>
          </div>
        </div>
        <ul className="list-body">
          {cryptoCurrencyDataList.map(eachCryptoCurrencyData => (
            <CryptocurrencyItem
              key={eachCryptoCurrencyData.id}
              cryptoCurrencyData={eachCryptoCurrencyData}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-currencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="crypto-currency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="Cryptocurrency Tracker"
        />
        {this.renderCryptoCurrenciesView()}
      </div>
    )
  }
}
export default CryptoCurrenciesList
