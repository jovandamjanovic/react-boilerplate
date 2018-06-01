import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Counter from '../components/Counter';

import { incrementCounter, decrementCounter } from '../actions/counter'

const mapStateToProps = (state) => ({ counterValue: state.counter.counterValue })

const mapDispatchToProps = (dispatch) => ({
    incClick: () => dispatch(incrementCounter()),
    decClick: () => dispatch(decrementCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
