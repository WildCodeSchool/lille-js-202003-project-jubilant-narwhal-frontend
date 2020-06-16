import React from 'react'
import LeftArrow from '../src/components/Button/LeftArrow'
import RightArrow from '../src/components/Button/RightArrow'
import MatiereBtn from '../src/components/Button/MatiereBtn'
import SendBtn from '../src/components/Button/SendBtn'
import PenBtn from '../src/components/Button/PenBtn'
import ValidateBtn from '../src/components/Button/ValidateBtn'

import DayOffOverlay from '../src/components/DayOffOverlay'
import TaskDoneOverlay from '../src/components/TaskDoneOverlay'
import ViewLeftBtn from '../src/components/Button/ViewLeftBtn'
import ViewRightBtn from '../src/components/Button/ViewRightBtn'

export default {
  title: 'Components'
}

export const ValidateBtnStory = () => <ValidateBtn />
export const SendBtnStory = () => <SendBtn />
export const MatiereBtnStory = () => <MatiereBtn />
export const LeftArrowStory = () => <LeftArrow />
export const RightArrowStory = () => <RightArrow />
export const DayOffOverlayStory = () => <DayOffOverlay />
export const TaskDoneOverlayStory = () => <TaskDoneOverlay />
export const ViewLeftBtnStory = () => <ViewLeftBtn />
export const ViewRightBtnStory = () => <ViewRightBtn />
export const PenBtnStory = () => <PenBtn />
