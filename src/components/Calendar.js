/*
 * Copyright (C) 2018 - 2019 Orange
 * 
 * This software is distributed under the terms and conditions of the 'MIT'
 * license which can be found in the file 'LICENSE.txt' in this package distribution 
 * or at https://spdx.org/licenses/MIT
 *
 */

 /* Orange contributed module for use on CozyCloud platform
 * 
 * Module name: MML - Mapping My Life
 * Version:     1.0.5
 * Created:     2018 by Orange
 */


import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import isEmpty from 'lodash/isEmpty'
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/calendar.css'
import '../styles/rowContent.css'

const InputCustomer = (props) => {
  return (

    <FormControl
      onClick={props.onClick}
      value={props.value}
      onChange={props.onChange}
      placeholder='Choisir la date' />
  )
}

class Calendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.selectDate = this.selectDate.bind(this)
  }

  handleChange (date) {
    this.setState({
      startDate: date
    })
  }
  selectDate () {
    if (!(isEmpty(this.state.startDate))) {
      let startDate = moment(this.state.startDate._d).format('YYYY-MM-DD')
      this.props.fetchPath(this.props.indexByDate, startDate)
    }
  }

  render () {
    return (
      <div>
        <div className='rowContent'>
          <form>
            <FormGroup>
              <ControlLabel>Choisir la date:</ControlLabel>{' '}
              <DatePicker customInput={<InputCustomer />}
                selected={this.state.startDate} onChange={this.handleChange}
                fixedHeight locale='fr'
                placeholderText='Click to select a date'
                peekNextMonth showMonthDropdown
                showYearDropdown dropdownMode='select' />
            </FormGroup>
            <FormGroup>
              <Button type='button' bsSize='small' bsStyle='success' onClick={this.selectDate}>Display</Button>
            </FormGroup>
          </form>
        </div>
      </div>
    )
  }
}
export default Calendar
