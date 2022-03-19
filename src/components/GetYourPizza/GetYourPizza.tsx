import React from 'react'
import { connect } from 'react-redux'

export const GetYourPizza = () => {
  return (
    <div>GetYourPizza</div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GetYourPizza)