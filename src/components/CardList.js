import Card from './Card';
import React from 'react';


const CardList = ({robots}) => {
	return(
		robots.map((user, i) => {
				return (
    			<Card
    			id={robots[i].id} 
    			name={robots[i].name}
    			email={robots[i].email}
    	 		/>
    		);
    		})
		);
}

export default CardList;