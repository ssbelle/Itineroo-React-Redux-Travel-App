import React from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ListOfSelectionsItem from './ListOfSelections_Item';


class ListOfSelections extends React.Component {
  constructor(props) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.state = {
      locationsList: props.places ? Object.values(props.places) : []
    };
  }

  moveItem(dragIndex, hoverIndex) {
    const dragItem = this.state.locationsList[dragIndex];

    this.setState(update(this.state, {
      locationsList: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragItem],
        ],
      },
    }));
  }

  render() {
    return (
    <ul className='selectedPlaces board'>
      {this.props.places
        .map((location, i) =>
          <ListOfSelectionsItem
            location={location}
            key={location.id}
            index={i}
            id={location.id}
            moveItem={this.moveItem}
          />
        )
      }
    </ul>);
  }
}

export default DragDropContext(HTML5Backend)(ListOfSelections);
