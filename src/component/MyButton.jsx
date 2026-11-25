import React from 'react';

export default function MyButton({ children, type = 'button', ...props }) {
	return (
		<button type={type} {...props}>
			{children}
		</button>
	);
}
