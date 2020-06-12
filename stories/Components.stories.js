import React from 'react'
import LeftArrow from '../src/components/Button/LeftArrow'
import RightArrow from '../src/components/Button/RightArrow'
import MatiereBtn from '../src/components/Button/MatiereBtn'
import SendBtn from '../src/components/Button/SendBtn'
import ValidateBtn from '../src/components/Button/ValidateBtn'
import App from '../src/index'
import DayOffOverlay from '../src/components/DayOffOverlay'
import TaskDoneOverlay from '../src/components/TaskDoneOverlay'

export default {
  title: 'Components'
}

export const IndexStory = () => <App />
export const DayOverlayStory = () => <DaDayColumnyOverlay />
export const ValidateBtnStory = () => <ValidateBtn />
export const SendBtnStory = () => <SendBtn />
export const MatiereBtnStory = () => <MatiereBtn />
export const LeftArrowStory = () => <LeftArrow />
export const RightArrowStory = () => <RightArrow />
export const DayOffOverlayStory = () => <DayOffOverlay />
export const TaskDoneOverlayStory = () => <TaskDoneOverlay />
