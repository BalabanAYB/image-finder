import React, { useState, useEffect } from 'react';

type PropsType = {
	tags: any;
	someTags: string | null | undefined;
	setTags: (text: string) => any;
};

const SomeTags: React.FC<PropsType> = ({ tags, setTags, someTags }): any => {
	let [editMode, setEditMode] = useState(false);
	let [editTags, setEditTags] = useState(tags);

	useEffect(() => {
		setTags(editTags);
	}, [editTags]);

	const activeEditMode = () => {
		setEditMode(true);
	};

	const deActiveEditMode = () => {
		setEditMode(false);
		if (setTags) {
			setTags(editTags);
		}
	};

	const onStatusChange = (e: any) => {
		setEditTags(e.currentTarget.value);
	};

	if (!editMode) {
		return (
			<div>
				<span onDoubleClick={activeEditMode}>{tags ? tags : someTags}</span>
			</div>
		);
	} else {
		return (
			<div>
				<input autoFocus onChange={onStatusChange} onBlur={deActiveEditMode} type="text" value={editTags} />
			</div>
		);
	}
};

export default SomeTags;
