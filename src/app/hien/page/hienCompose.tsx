import * as React from 'react'

const words = (str:string) => {
	return String(str)
		.toLowerCase()
		.split(/\s|\b/)
}

const unique = (list:string[]) => {
	const uniqList = []
	for (const v of list) {
		// value not yet in the new list?
		if (uniqList.indexOf(v) === -1) {
			uniqList.push(v)
		}
	}
	return uniqList
}

const compose1 = (fn1:any, fn2:any) => (text:string) => {
	return fn2(fn1(text))
}

const HienComposeView = () => {
	const letters = compose1(words, unique)
	const chars: string[] = letters('I am Hien')
	const taskList = chars.map((task:string, key:number) => (
		<div key={key}>{task}</div>
	))
	return (
		<>
			{taskList}
		</>
	)
}

export const HienComposePage = HienComposeView
