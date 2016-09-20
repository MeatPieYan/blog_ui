import React from "react";

export default class Line extends React.Component {
	

  render() {
  	const { title, shortDesc, auth, dateTime} = this.props.val;
    return (
    	<article>
    		<header>
      		<h2>{title} </h2>
      	</header>
      	<section>{shortDesc}</section>
      	<footer>
      		<a>{auth}</a><time>{dateTime}</time>
    		</footer>
	    </article>
    );
  }
}
