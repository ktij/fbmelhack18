import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from 'material-ui'
import { ModeEdit } from '@material-ui/icons'

import { getItems } from '../ducks/items'
import ItemEditor from './ItemEditor'

class App extends Component {
  state = {
    currentItemIndex: -1,
    isItemEditorOpen: false
  }

  openItemEditorWithIndex = i =>
    this.setState({ currentItemIndex: i, isItemEditorOpen: true })

  closeItemEditor = () => {
    this.setState({ isItemEditorOpen: false })
    this.props.getItems()
  }

  componentDidMount = () => {
    this.props.getItems()
  }

  render() {
    const { items } = this.props
    const { isItemEditorOpen, currentItemIndex } = this.state
    return (
      <div>
        <Paper>
          <Typography>Hello World!</Typography>
          <List>
            {items.payload.map((item, i) => (
              <ListItem key={i}>
                <ListItemText primary={item.title} secondary={item.end_date} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => this.openItemEditorWithIndex(i)}>
                    <ModeEdit />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
        <ItemEditor
          open={isItemEditorOpen}
          onClose={this.closeItemEditor}
          index={currentItemIndex}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ items }) => ({
  items
})

const mapDispatchToProps = { getItems }

export default connect(mapStateToProps, mapDispatchToProps)(App)
