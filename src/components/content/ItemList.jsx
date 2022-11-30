import React from 'react';
import LItem from './LItem';

const ItemList = ({items, handleCheck, handleDelete}) => {
	return (
		<ul>
			{items.map((item,index) => {
				return (
					<LItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete = {handleDelete}
          />
				);
			})}
		</ul>
	);
};

export default ItemList;
