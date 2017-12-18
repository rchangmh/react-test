import React, { Component } from 'react'
import {
  Input as SemInput,
  Popup as SemPopup,
  Icon as SemIcon,
  Segment as SemSegment,
  Button as SemButton,
  Form as SemForm,
  Message as SemMessage,
  Transition as SemTransition,
  Header as SemHeader,
  Progress as SemProgress,
  Confirm as SemConfirm,
  Modal as SemModal,
  Menu as SemMenu
} from 'semantic-ui-react'
import { Input as AntInput, Spin as AntSpin } from 'antd'

export class Input extends Component {
  render() {
    if (this.props.inputtype === 'dollar') {
      return <AntInput {...this.props} />
    }
    return <SemInput {...this.props} />
  }
}

export const viewport = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

export const container = {
  textAlign: 'center',
  width: '50%',
  maxWidth: '400px',
  minWidth: '400px',
  maxHeight: '95vh',
  overflow: 'auto',
  padding: '30px'
}

export const padding = {
  padding: '10px'
}

export const transition = {
  animation: 'scale',
  duration: '400'
}

export const drop = {
  borderStyle: 'solid',
  height: '100px',
  width: '100px',
  margin: '0 auto'
}

export const spinner = {
  textAlign: 'left'
}

export {
  SemMenu as Menu,
  SemPopup as Popup,
  SemIcon as Icon,
  SemSegment as Segment,
  SemButton as Button,
  SemForm as Form,
  SemMessage as Message,
  SemTransition as Transition,
  SemHeader as Header,
  SemProgress as Progress,
  SemConfirm as Confirm,
  SemModal as Modal,
  AntSpin as Spin
}
