import com from './com'
import moduleUtil from '../helper'
import redux from './redux'
import route from './conf/route'
import { RouteProps } from 'react-router'

export default moduleUtil.registerModule(route, com, redux)

