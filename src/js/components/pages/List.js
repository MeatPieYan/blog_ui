import React from "react";

import Line from "./Line";

export default class List extends React.Component {
	
  render() {
  	const list = [ {title: "aa", shortDesc:"testtesttest", auth:"Robin Yan", dateTime: "05 Jan 2016"}, {title: "bb", shortDesc:"testtesttest", auth:"Robin Yan", dateTime: "05 Jan 2016"}];

	  const li = list.map((value, key) => {
	 		return (
	      <li><Line val={value} /></li>
	    );
	  })

	  return (
	  	<ul>
	  		{li}
	  	</ul>
	  );
    
  }
}
