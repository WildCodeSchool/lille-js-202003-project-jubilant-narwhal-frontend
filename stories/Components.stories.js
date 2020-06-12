import React from 'react'
import FlecheDroiteBtn from '../src/components/Button/FlecheDroiteBtn'
import MatiereBtn from '../src/components/Button/MatiereBtn'
import SendBtn from '../src/components/Button/SendBtn'
import ValidateBtn from '../src/components/Button/ValidateBtn'
import App from '../src/index'
import DayOffOverlay from '../src/components/DayOffOverlay'
import TaskDoneOverlay from '../src/components/TaskDoneOverlay'
import ViewLeftBtn from '../src/components/Button/ViewLeftBtn'
import ViewRightBtn from '../src/components/Button/ViewRightBtn'

export default {
  title: 'Components'
}

export const IndexStory = () => <App />
export const ValidateBtnStory = () => <ValidateBtn />
export const SendBtnStory = () => <SendBtn />
export const MatiereBtnStory = () => <MatiereBtn />
export const FlecheDroiteStory = () => <FlecheDroiteBtn />
export const DayOffOverlayStory = () => <DayOffOverlay />
export const TaskDoneOverlayStory = () => <TaskDoneOverlay />
export const ViewLeftBtnStory = () => <ViewLeftBtn />
export const ViewRightBtnStory = () => <ViewRightBtn />
