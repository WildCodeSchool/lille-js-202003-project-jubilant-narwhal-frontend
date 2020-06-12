import React from 'react'
import FlecheDroiteBtn from '../src/components/Button/FlecheDroiteBtn'
import MatiereBtn from '../src/components/Button/MatiereBtn'
import SendBtn from '../src/components/Button/SendBtn'
import ValidateBtn from '../src/components/Button/ValidateBtn'
import DayColumn from '../src/components/DayColumn'
import DayOverlay from '../src/components/DayOverlay'

export default {
  title: 'Components'
}

export const DayOverlayStory = () => <DayOverlay />
export const DayColumnStory = () => <DayColumn />
export const ValidateBtnStory = () => <ValidateBtn />
export const SendBtnStory = () => <SendBtn />
export const MatiereBtnStory = () => <MatiereBtn />
export const FlecheDroiteStory = () => <FlecheDroiteBtn />
