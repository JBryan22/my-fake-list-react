import React from 'react';
import MyFakeListItem from './my_fake_list_item';

const MyFakeList = (props) => {
  const listItems = props.list.map((item, index) => {
    return <MyFakeListItem key={index} item={item} />
  });

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {listItems}
      </ul>
    </div>
  );
};

export default MyFakeList;
