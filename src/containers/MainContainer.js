import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sortBy: 'Alphabetically',
    filter: 'All'
  }

  componentDidMount() {
    const url = 'http://localhost:3000/stocks'
    fetch(url)
      .then(resp => resp.json())
      .then( json => {
        this.setState( prevState => {
        return { stocks: [...prevState.stocks, ...json] }
      })
      })
  }

  buyStock = ( stockID ) => {
    const boughtStock = this.state.stocks.find( stock => stock.id === stockID )
    if ( this.state.portfolio.includes(boughtStock) ) return
    this.setState( prevState => {
      return { portfolio: [...prevState.portfolio, boughtStock] } 
    })
  }
  
  sellStock = ( stockID ) => {
    this.setState( prevState => {
      const newPortfolioState = prevState.portfolio.filter( stock => stock.id !== stockID )
      return { portfolio: [...newPortfolioState] }
    })
  }

  setSort = (event) => {
    this.setState({sortBy: event.target.value})
  }
  
  setFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  selectedStocks = () => {
    let stocks
    if (this.state.filter !== 'All') {
      stocks = this.state.stocks.filter( stock => stock.type === this.state.filter )
    } else { stocks = this.state.stocks }

    if (this.state.sortBy === 'Alphabetically') {
      return stocks.sort( (a, b) => a.name > b.name ? 1: -1 )
    } else {
      return stocks.sort( (a, b) => a.price - b.price )
    }
  }


  render() {
    return (
      <div>
        <SearchBar currentSort={this.state.sortBy} handleSort={ this.setSort } handleFilter={ this.setFilter } />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={ this.selectedStocks() } buyStock={ this.buyStock } />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={ this.state.portfolio } sellStock={ this.sellStock } />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
