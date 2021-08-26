import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const ApiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {cryptoCurrencyDataList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrencyList()
  }

  renderCryptoCurrency = () => {
    const {cryptoCurrencyDataList} = this.state
    return (
      <CryptocurrenciesList cryptoCurrencyDataList={cryptoCurrencyDataList} />
    )
  }

  getCryptoCurrencyList = async () => {
    const response = await fetch(ApiUrl)
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogoUrl: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({cryptoCurrencyDataList: formattedData, isLoading: false})
  }

  renderLoading = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoading() : this.renderCryptoCurrency()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
