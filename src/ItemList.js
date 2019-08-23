import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  state = {
    items: ['nail', 'hammer', 'scaffold', 'wood']
  }

  render() {
    return (
      this.state.items.map((item, index) => <Item item={item} index={index} />)
    )
  }
}

export default ItemList;