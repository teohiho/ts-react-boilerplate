import { ImmutableObject, from } from 'seamless-immutable'


export const initialState = from({
  tasks: [
    {
      id: '1',
      tags: ['Home'],
      title: 'Play football',
      completed: false,
    },
    {
      id: '2',
      tags: ['Home'],
      title: 'Play game',
      completed: false,
    },
    {
      id: '3',
      tags: ['Work'],
      title: 'Working typescript',
      completed: false,
    },
    {
      id: '4',
      tags: ['Work'],
      title: 'Working test for react',
      completed: false,
    },
    {
      id: '5',
      tags: ['Work'],
      title: 'Handle styles',
      completed: false,
    },
  ],
})

export type TTask = Readonly<{
  tags: string[],
  title: string,
  completed: boolean,
  id: string,
}>

export type TTodoState = ImmutableObject<
  Readonly<{
    tasks: TTask[],
  }>
>
