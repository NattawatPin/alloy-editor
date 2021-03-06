import ButtonCommand from '../base/button-command.js';
import ButtonIcon from './button-icon.jsx';
import ButtonStateClasses from '../base/button-state-classes.js';
import React from 'react';

/**
 * The ButtonRemoveImage class removes an image using a CKEDITOR.command.
 *
 * @class ButtonRemoveImage
 * @uses ButtonCommand
 */
class ButtonRemoveImage extends React.Component {
	static defaultProps = {
		command: 'removeImage',
	};

	static key = 'removeImage';

	/**
	 * @inheritDoc
	 */
	render() {
		const cssClass = `ae-button ${this.getStateClasses()}`;

		return (
			<button
				aria-label={AlloyEditor.Strings.removeImage}
				aria-pressed={cssClass.indexOf('pressed') !== -1}
				className={cssClass}
				onClick={this.execCommand}>
				<ButtonIcon symbol="times-circle" />
			</button>
		);
	}
}

export default ButtonCommand(ButtonStateClasses(ButtonRemoveImage));
