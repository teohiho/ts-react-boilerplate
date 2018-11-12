import {
	Button,
	Classes,
	InputGroup,
	Intent,
	Popover,
	Position,
	Tag,
} from '@blueprintjs/core'
import { IIsOpenState, IIsOpenStateHandle, isOpenState } from '../com/isOpen'
import { ITextState, ITextStateHandle, textState } from '../com/onChangeText'
import { compose, withStateHandlers } from 'recompose'

import React from 'react'
import classnames from 'classnames'

const style = require('../scss/style.scss')

interface IToDoPropsOut {
	textHello: string
}

interface ITodoState {
	listToDo: string[],
}

export interface IToDoStateHandle extends ITextStateHandle, IIsOpenStateHandle{
	handleAddToDo: (text:string) => void,
	handleDeleteToDo: (key:number) => void,
	handleEditToDo: (key:number, text:string) => void,

}

interface IToDoPropsIn extends IToDoPropsOut, IToDoStateHandle, ITodoState, ITextState, IIsOpenState {

}

export const toDoState = withStateHandlers<ITodoState, any, any>(
	{
		listToDo: [],
	},
	{
		handleAddToDo: ({ listToDo }) => (text) => {
			console.log('textInput:', text)
			console.log('listToDo', listToDo)
			return {
				listToDo: [...listToDo,  text],
			}
		},

		handleDeleteToDo: ({ listToDo }) => (key) => {
			console.log('textInput:', key)
			console.log('listToDo', listToDo)
			return {
				listToDo: [
					...listToDo.slice(0,  key),
					...listToDo.slice(key + 1),
				],

			}
		},

		handleEditToDo: ({ listToDo }) => (key, textEdit) => {
			console.log('textEdit:', textEdit)
			console.log('listToDo:', listToDo)
			console.log('key:', key)
			return {
				listToDo: [
					...listToDo.slice(0,  key),
					// {
					// 	...listToDo[key],
					// 	textEdit,
					// },
					textEdit,
					...listToDo.slice(key + 1),
				],

			}
		},
	},
)
const ContentView = ({ text, onChangeText, index, updateValue }:IContentPropsIn) => (
	<>
		<div key="input">
			<label className={Classes.LABEL}>
				Edit this text
				<input autoFocus={true} className={Classes.INPUT} type="text" value={text}
					onChange={event => onChangeText(event.target.value)}
				/>
			</label>
			<Button
				intent={Intent.SUCCESS}
				className={Classes.POPOVER_DISMISS}
				onClick={(event:any) => updateValue(index, text)}
			>
				Edit
			</Button>


			{/* <button onClick={() => handleDeleteToDo(key)} className="bp3-tag-remove"></button> */}
		</div>
	</>
)

const Content = compose<IContentPropsIn, IContentPropsOut>(textState)(ContentView)

interface IContentPropsOut {
	text: string,
	index: number,
	updateValue: (key:number, text:string) => void,
}
interface IContentPropsIn extends ITextState, IContentPropsOut, ITextStateHandle, IToDoStateHandle{

}

const HienToDoView =  ({ text,
			textHello,
			onChangeText,
			isOpen,
			listToDo,
			handleAddToDo,
			handleDeleteToDo,
			handleEditToDo,
			handleBooleanChange }: IToDoPropsIn) => {
	return (
		<>
			<h3 className={classnames(style.title, 'p-b-sm')}>{textHello ? textHello :'Hey'}, Please write your todo</h3>
			<div>
			<InputGroup
				type="text"
				placeholder="Add todo"
				value={text}
				large={true}
				onChange={(event: any) => onChangeText(event.target.value)}
				onKeyPress={event => event.key === 'Enter' ? handleAddToDo(text) : null}
			/>
				<Button onClick={() => handleAddToDo(text)}>
					Add
				</Button>
				{
					// listToDo.map((task, key) => <p key={key}>{task}</p>)
					listToDo.map((task, key) => (
						<div className="p-t-sm" key={key}>
							<Popover
								popoverClassName="bp3-popover-content-sizing"
								position={Position.LEFT}
								// isOpen={isOpen}
								// content={getContents}
							>
								<Tag
									className="bp3-interactive "
									key={key}
									// minimal={true}
									icon={'map'}
									large
									round
									// onClick={handleBooleanChange}
								>
									{task}
								</Tag>
								{/* {getContents({ text: task })} */}
								<Content text={task} index={key} updateValue={handleEditToDo} />
							</Popover>
							<button onClick={() => handleDeleteToDo(key)} className="bp3-tag-remove"></button>

						</div>
					))
				}
			</div>
		</>
	)
}
// export const textState1 = withStateHandlers(
// 	{
// 		text: '',
// 	},
// 	{
// 		onChangeText: () => (textInput: string) => {
// 			return 	{
// 				text: textInput,
// 			 }
// 		},
// 	},
// )


export const HienToDoPage = compose<IToDoPropsIn,  IToDoPropsOut>(textState, toDoState, isOpenState)(HienToDoView)
