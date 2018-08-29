import { TRootState } from 'conf/redux/reducer'
import { createSelector } from 'reselect'
interface ISampleProps {

}
const getRelatedThing = (state: TRootState, props: ISampleProps) =>
  null
export const getSomthing = createSelector(
  getRelatedThing,
  (relatedThing) => {
	return null
  },
)
