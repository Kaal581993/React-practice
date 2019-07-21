import React from 'react';
import CodeHighlight from 'code-highlight';

// import all the styles
import "code-highlight/lib/style.css";
import "highlight.js/styles/xcode.css";


const MyComponent = (props) => {

	return (
		<CodeHighlight
			language="javascript"
			title="Hello World in Javascript"
			description="This code will log hello world in the console."
		>
			{`
            	console.log("Hello World");
            `}
		</CodeHighlight>
	)

}

export default MyComponent;
