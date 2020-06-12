import React from 'react'
import FlecheDroiteBtn from '../src/components/Button/FlecheDroiteBtn'
import MatiereBtn from '../src/components/Button/MatiereBtn'
import SendBtn from '../src/components/Button/SendBtn'
import PenBtn from '../src/components/Button/PenBtn'
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
export const FlecheDroiteStory = () => <FlecheDroiteBtn />
export const DayOffOverlayStory = () => <DayOffOverlay />
export const TaskDoneOverlayStory = () => <TaskDoneOverlay />
export const PenBtnStory = () => <PenBtn />
