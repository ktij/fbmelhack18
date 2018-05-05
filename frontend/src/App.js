import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Paper, Typography, List, ListItem, ListItemText } from 'material-ui'

import { getItems } from './ducks/items'

class App extends Component {
  componentDidMount = () => {
    this.props.getItems()
  }

  render() {
    const { items } = this.props
    console.log(items)
    return (
      <div>
        <Paper>
          <Typography>Hello World!</Typography>
          <List>
            {items.payload.map((item, i) => (
              <ListItem key={i}>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ items }) => ({
  items
})

const mapDispatchToProps = { getItems }

export default connect(mapStateToProps, mapDispatchToProps)(App)
