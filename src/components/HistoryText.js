import { useState } from 'react';

const _history = JSON.parse(localStorage.getItem('history'));

export const HistoryText = () => {
	const [textCase, setTextCase] = useState('uppercase');
	const [text, setText] = useState('');
	const [history, setHistory] = useState(_history === null ? [] : _history);

	const handleButtonClick = () => {
		const HistoryText = textCase === 'uppercase' ? text.toUpperCase() : text.toLowerCase();
		history.push(HistoryText);
		localStorage.setItem('history', JSON.stringify(history));
		setHistory([...history]);
	}

	return (
		<div>
			<form>
				<input id="uppercase" type="radio" name="textCase" value="uppercase" checked={textCase === "uppercase"} onChange={(e) => setTextCase(e.target.value)} />
				<label htmlFor="uppercase">Großschrift</label>

				<input id="lowercase" type="radio" name="textCase" value="lowercase" checked={textCase === "lowercase"} onChange={(e) => setTextCase(e.target.value)} />
				<label htmlFor="lowercase">KleinSchrift</label>
			</form>
            <div className='button-input'>
			<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
			<button onClick={(e) => handleButtonClick(e)}>In History hinzufügen</button>
			</div>
            <div className="history">
				<h2>History:</h2>
				<div className="content">
					{history.map((m,i) => <div key={i}>{m}</div>)}
				</div>
			</div>
		</div>
	)
};