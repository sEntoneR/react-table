import React  from 'react';
import ReactDOM from 'react-dom';
import Table from './table'
import _ from 'lodash'; 

import './index.css'

import data from './humans.json'

class App extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    data: data,
    sort: 'asc', 
    sortField: 'lastName'
  }
  }

onSort = sortField => {
  const cloneData = this.state.data.concat() //copy of array
  const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'
  const orderedData = _.orderBy (cloneData, sortField, sortType)

  this.setState ({
    data: orderedData,
    sort: sortType,
    sortField
  })
}
  
  
  render() {
  return (
    <Table data={this.state.data}
    onSort={this.onSort}
    sort={this.state.sort}
    sortField={this.state.sortField} />
  )
  }
}

  

ReactDOM.render(<App  />, document.getElementById('root'));

